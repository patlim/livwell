'use client';

import { useEffect } from 'react';

export const PlimAscii = () => {
  const ascii = `
         \\\\
 \\\\      (o>
 (o>     //\\       developed by
_(()_____V_/_____ www.pat-lim.com
 ||      ||
         ||
`;

  useEffect(() => {
    const comment = document.createComment(ascii);
    document.body.insertBefore(comment, document.body.firstChild);
  }, [ascii]);

  return null;
};
