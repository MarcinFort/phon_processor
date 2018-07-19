import React from 'react';

export const Home = () => (
    <div id="welcome_info">
        <h1>Welcome to <span class="program_name">PhonProcessər!</span></h1>
        <p>(UNDER CONSTRUCTION)</p>
        <p>PhonProcessər is intended to be an online clone of <i>FeaturePad</i> and <i>Pheatures</i>, programs intended to help students of linguistics to learn phonological distinctive features. Special credits need to be given to the creators of the aforementioned software: Bruce Hayes, Kie Zuraw and Floris van Vugt. Unlike its predecessor, it is possible to use PhonProcessər in the browser, without downloading anything to your machine.</p>
        <p>Currently, PhonProcessər in the Alpha version allows you to:
            <ul>
                <li>Run phonological processes specified in terms of distinctive features</li>
                <li>Create your own phoneme inventories</li>
                <li>Compare any two phonemes in terms of their phoneme specification</li>
            </ul>
        </p>
        <p>Planned functionalities (coming soon!):
            <ul>
                <li>Use diacritics</li>
                <li>Customize the existing feature system</li>
                <li>Register an account, login, and save your work</li>
                <li>Some pedagogical utilities, like quizzes on feature specifications</li>
            </ul>
        </p>
        <p>For now, PhonProcessər offers you fewer functionalities than <i>Pheatures</i>. Please download <i>Pheatures</i> if you need a more advanced tool!</p>
        <p>PhonProcessər was coded using JavaScript and ReactJS and is supported and developed by Marcin Fortuna (University of Gdańsk, Poland). Contact me at: marcin . fortuna [ a t ] ug . edu . pl (anti-spam filter)) </p>
    </div>
);