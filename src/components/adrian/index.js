
import AdrianVondy from './kay_adrian.jpg';
import Main from '../../layouts/main';
import React from 'react';

export default function Adrian() {
  document.title = 'Kay Adrian of Adrian & Vondy P.L.C.';
  
  return (
    <Main>
      <div className="container_omega">
        <p>
          <img alt="Kay Adrian" className="alignleft" src={AdrianVondy} />
          <strong>Kay Adrian</strong> has retired from the active practice of
          law but remains of counsel to the firm.  She earned her undergraduate
          degree with honors in the teaching of social studies from the
          University of Illinois, and was awarded a Juris Doctor degree by
          Loyola University in Chicago.
        </p>
      </div> 
    </Main>
  );
}
