
import FrederickVondy from './frederick_vondy.jpg';
import Main from '../../layouts/main';
import React from 'react';

export default function Frederick() {
  document.title = 'Frederick S. Vondy of Adrian & Vondy P.L.C.';

  return (
    <Main>
      <div className="container_omega">
        <img alt="Frederick Vondy" className="alignleft" src={FrederickVondy} />
        <p>
          <strong>Frederick S. Vondy</strong> earned his undergraduate degree in Greek
          and Latin from Columbia University in New York, and was
          awarded a Juris Doctor (with honors) by the University of
          Maryland.
        </p>
        <p>
          His practice is limited to estate planning, guardianships
          and probate administration, real estate settlements and real
          estate title work. He is licensed to practice law in
          Virginia, Maryland and West Virginia.
        </p>
        <p>
          He currently serves as the assistant commissioner of
          accounts for Frederick County, Virginia, supervising and
          auditing the work of fiduciaries.
        </p>
        <p>
          For many years he represented Frederick County on the
          Northwestern Community Services Board, and he was an adjunct
          professor at Lord Fairfax Community College.  He previously
          worked as an editor at the Rocky Mountain News in Denver,
          the Chicago Sun-Times and the Baltimore Sun.
        </p>
      </div>
    </Main>
  );
}
