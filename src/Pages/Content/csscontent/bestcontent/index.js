import React from 'react';

import { Container } from '../../styles';

export default function Bestcontentcss() {
    return <Container>
        <div>
            <h1>Quer ter o melhor conteudo em video sobre CSS, entáo assiste o video que disponibilizamos logo a baixo.</h1>
        </div>
        <iframe id="ytplayer" type="text/html" width="640" height="360" src="http://www.youtube.com/embed/CTjUpZqTJDg?autoplay=1" frameborder="0"/>
    </Container>;
}
