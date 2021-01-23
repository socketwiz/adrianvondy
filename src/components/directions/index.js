
import Main from '../../layouts/main';
import React from 'react';

export default function Directions() {
  document.title = 'Adrian & Vondy Map in Winchester, Virginia';

  /* eslint-disable max-len */
  return (
    <Main>
      <div className="container_omega">
        <h2 className="widgettitle">ADRIAN &amp; VONDY, P.L.C.</h2>
        <div className="hr"></div>
        <div>
          <p>
            We are located at 125 West Boscawen Street in the historic district
            of Winchester, Virginia. The office dates to the 1790s.
          </p>
        </div>
        <div className="map-border">
          <iframe width="890"
            height="450"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=125+West+Boscawen+Street+Winchester,+VA+22601&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=50.644639,68.642578&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=125+W+Boscawen+St,+Winchester,+Virginia+22601&amp;t=m&amp;ll=39.184369,-78.167896&amp;spn=0.029938,0.068665&amp;z=14&amp;iwloc=A&amp;output=embed"
            title="Location of Adrian and Vondy Attorneys at Law">
          </iframe>
          <br />
          <small>
            <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=125+West+Boscawen+Street+Winchester,+VA+22601&amp;aq=&amp;sll=37.0625,-95.677068&amp;sspn=50.644639,68.642578&amp;vpsrc=0&amp;ie=UTF8&amp;hq=&amp;hnear=125+W+Boscawen+St,+Winchester,+Virginia+22601&amp;t=m&amp;ll=39.184369,-78.167896&amp;spn=0.029938,0.068665&amp;z=14&amp;iwloc=A" className="map-link">View Larger Map</a>
          </small>
        </div>
      </div>
    </Main>
  );
  /* eslint-enable max-len */
}
