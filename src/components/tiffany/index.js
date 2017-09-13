
import Main from '../../layouts/main';
import React from 'react';
import TiffanyMerkel from './tiffany_merkel.jpg';

export default function Tiffany() {
    document.title = 'Tiffany A. H. Merkel of Adrian & Vondy P.L.C.';

    return (
        <Main>
            <div className="container_omega">
                <p>
                    <img alt="Tiffany_merkel" className="alignleft" src={TiffanyMerkel} />
                    <strong>Tiffany A. H. Merkel</strong> is a Winchester native who graduated from
                    James Wood High School and then received an Associate of Arts &amp; Sciences Degree
                    in General Studies, with a focus on languages, from Lord Fairfax Community College.<br />
                    <br />
                    As a paralegal with primary duties in the bankruptcy field, she assists the clients
                    in compiling the material needed for their bankruptcy petition and is the primary
                    contact person as the case progresses.<br />
                    <br />
                    Tiffany brings experience from her previous work in the medical and client relations
                    fields. She has also served as a tutor for persons learning French, Spanish and English
                    as a Second Language.
                </p>
            </div> 
        </Main>
    );
}
