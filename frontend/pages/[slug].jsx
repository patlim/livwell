import groq from 'groq';
import client from '../client';
import HomeSection from '../components/homeSection';
import TitleSection from '../components/titleSection';
import TextSection from '../components/textSection';
import Practitioner from '../components/practitionerSection';

const Page = ({ page }) => {
  if (!page) {
    return <div>Loading...</div>;
  }
  const { title, pageBuilder } = page;
  return (
    <div>
      <article>
        { title === "LIVWELL"
            ? <HomeSection />
            : <TitleSection heading={title}/>
        }
        {pageBuilder && pageBuilder.map((block, index) => {
          if (block._type === 'textSection') {
            return (
              <TextSection
                key={index}
                heading={block.heading}
                showHeading={block.showHeading}
                body={block.body}
                alignment={block.alignment}
              />
            )
          }
          if (block._type === 'practitionerSection') {
            return (
              <Practitioner
                key={index}
                name={block.name}
                description={block.description}
                headshot={block.headshot.asset.url}
                buttonText={block.buttonText}
                buttonUrl={block.buttonUrl}
              />
            )
          }
          return null;
        })}
      </article>
    </div>
  );
};

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  pageBuilder[]{
    ...,
    _type == "textSection" => @->{
      _type,
      heading,
      showHeading,
      alignment,
      body
    },
    _type == "practitionerSection" => @->{
      _type,
      name,
      description,
      headshot{
        asset->{
          url
        }
      },
      buttonText,
      buttonUrl
    }
  }
}`;


export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const page = await client.fetch(query, { slug });
  console.log("Fetched Page Data:", page);
  
  return {
    props: {
      page,
    },
  };
}

export default Page;
