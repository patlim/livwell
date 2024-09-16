import groq from "groq";

export default function getPageQuery(pageSlug) {
  return groq`*[_type == "page" && slug.current == "${pageSlug}"][0]{ 
    title, 
    pageBuilder[]{
      _type,
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
      },
      _type == "eventsSection" => @->{
        _type,
        "events": events[]->{
          title,
          date,
          location,
          description,
          image{
            asset->{
              url
            }
          }
        } | order(date asc) [date >= now()]
      },
      _type == "pricingSection" => @->{
        _type,
        heading,
        subheading,
        prices[]{
          duration,
          price
        }
      }
    }
  }`;
}