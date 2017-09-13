
import AnnettMerkel from './annette_mccracken.jpg';
import Main from '../../layouts/main';
import React from 'react';

export default function Annette() {
    document.title = 'Annette McCracken of Adrian & Vondy P.L.C.';

    return (
        <Main>
            <div className="container_omega">
                <p>
                    <img alt="Annette_mccracken" className="alignleft" src={AnnettMerkel} />
                    <strong>Annette McCracken</strong> is the legal assistant at Adrian &amp; Vondy.
                    She earned a Bachelor of Business Administration degree from Saint Mary’s College
                    in Notre Dame, Indiana, in 1988, specializing in International Business and Finance,
                    with minors in Spanish, Math and Economics. In 1991, she received a Master of
                    International Business Studies degree from the University of South Carolina
                    in Columbia, South Carolina.<br />
                    <br />
                    She has previously worked in the banking industry, primarily facilitating import-export payments.
                </p>
            </div> 
        </Main>
    );
}
