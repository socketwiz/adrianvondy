
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
          <strong>Catherine Marsten</strong> earned a degree in
          Paralegal Studies from Lord Fairfax Community College.  She provides
          general office support and assists in reviewing and auditing fiduciary
          filings.
        </p>
        <p>
          She previously worked as a veterinary assistant and currently does
          volunteer work for several animal rescue organizations.
        </p>
      </div> 
    </Main>
  );
}
