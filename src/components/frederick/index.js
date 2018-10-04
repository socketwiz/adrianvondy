
import FrederickVondy from './frederick_vondy.jpg';
import Main from '../../layouts/main';
import React from 'react';

export default function Frederick() {
    document.title = 'Frederick S. Vondy of Adrian & Vondy P.L.C.';

    return (
        <Main>
            <div className="container_omega">
                <img alt="Frederick Vondy" className="alignleft" src={FrederickVondy} />
                <p>Frederick S. Vondy earned his undergraduate degree in Greek and Latin
                    from Columbia University in New York, and was awarded a Juris Doctor
                    (with honors) by the University of Maryland.</p>
                <p>His primary areas of practice involve estate planning and probate
                    administration, real estate settlements, and representing both creditors
                    and debtors in bankruptcy proceedings.  He is licensed to practice law in
                    Virginia, Maryland and West Virginia.</p>
                <p>He serves as an adjunct professor at Lord Fairfax Community College and
                    is the assistant commissioner of accounts for Frederick County, Virginia.</p>
                <p>He previously worked as an editor at the Rocky Mountain News in Denver,
                    the Chicago Sun-Times and the Baltimore Sun.</p>
            </div> 
        </Main>
    );
}
