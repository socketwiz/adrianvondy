
import CatherineMarsten from './catherine-marsten.jpg';
import Main from '../../layouts/main';
import React from 'react';

export default function Catherine() {
  document.title = 'Catherine Marsten';

  return (
    <Main>
      <div className="container_omega">
        <p>
          <img alt="Catherine Marsten" className="alignleft" src={CatherineMarsten} />
          Catherine Marsten is currently a student at Lord Fairfax Community
          College, where she is in the process of earning of an Associate of Arts
          degree in Paralegal Studies. Following that, she plans to pursue
          a Bachelor of Arts degree.
        </p>
        <p>
          Catherine primarily provides general office support, focusing on
          real estate settlements, estate planning and estate administration.
          Previously, she worked in the veterinary and customer service fields.
        </p>
      </div> 
    </Main>
  );
}
