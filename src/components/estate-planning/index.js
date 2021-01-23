
import Main from '../../layouts/main';
import React from 'react';

export default function EstatePlanning() {
  document.title = 'Adrian & Vondy Wills, Trusts, Probate and Estate Administration';

  return (
    <Main>
      <div className="container_omega">
        <h2 className="widgettitle">Estates, Probate, Wills and Trusts</h2>

        <p>
          Our office offers complete estate planning services, ranging from the most basic wills
          to complex trusts.
        </p>

        <p>
          We have particular experience in preparing supplemental needs trusts to protect assets for
          persons with disabilities.
        </p>

        <p>
          Our office also provides living wills and powers of attorney as part of our estate
          planning practice.
        </p>

        <p>
          If you have been named as an executor of a will or if you need to administer the
          estate of a person who has died without a will, we can assist you in working
          through the probate process and estate administration matters.
        </p>
      </div> 
    </Main>
  );
}
