import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import './AboutPage.scss'
import Reviews from 'components/Reviews/Reviews'
import ButtonToTop from 'components/ButtonToTop/ButtonToTop'

type Props = {}

const AboutPage = (props: Props) => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <Container className="about" maxWidth="lg">
            <div className="title">About</div>
            <div className="about-box-img">
                <img src="/images/about.jpg" alt="about" />
            </div>
            <h2 className="about-heading">Welcome to Alino</h2>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <p>
                        Alino! In ac metus arcu. Etiam imperdiet metus nec erat
                        a turpis. Fusce ante mauris, facilisis a ortor non,
                        imperdiet feugiat ex. Class aptent et taciti facilisi,
                        usce ante mauris, facilisis a ortor non, imperdiet
                        feugiat ex. Class aptent et taciti facilisi. Integer
                        tortor magna lacus vestibulum maximus vitae nibh iaculis
                        neque blandit.
                    </p>
                    <p>
                        Cursus vitae suscipit a, luctus vel risus. Donec urna
                        velit, fringilla vel est vel, viverra finibus libero.
                        Maecenas venenatis consectet ultrices urna velit,
                        fringilla vel est vel, viverra finibus libero.
                    </p>
                </Grid>
                <Grid item xs={6}>
                    <p>
                        Usce ante mauris, facilisis a ortor non, imperdiet
                        feugiat ex. Class aptent et taciti facilisi. Integer
                        tortor magna.Cursus vitae suscipit a, luctus vel risus.
                        Donec urna velit, fringilla vel est vel, viverra finibus
                        libero. Maecenas venenatis consectet ultrices urna
                        velit, fringilla vel est vel, viverra finibus libero.
                    </p>
                    <p>
                        Nulla facilisi. Integer tortor magna, cursus vitae
                        suscipit a, luctus vel risus. Donec urna velit,
                        fringilla vel est vel, viverra finibus libero. Maecenas
                        venenatis consectetur ultrices.
                    </p>
                </Grid>
            </Grid>
            <h2 className="about-subtitle">
                The Professional Publishing Platform
            </h2>
            <p>
                Aenean consectetur massa quis sem volutpat, a condimentum tortor
                pretium. Cras id ligula consequat, sagittis nulla at,
                sollicitudin lorem. Orci varius natoque penatibus et magnis dis
                parturient montes.
            </p>
            <p>
                In a professional context it often happens that private or
                corporate clients corder a publication to be made and presented
                with the actual content still not being ready. Think of a news
                blog that’s filled with content hourly on the day of going live.
                However, reviewers tend to be distracted by comprehensible
                content, say, a random text copied from a newspaper or the
                internet. The are likely to focus on the text, disregarding the
                layout and its elements.
            </p>
            <h2 className="about-subtitle">Fastest Growing News Network</h2>
            <p>
                Cicero famously orated against his political opponent Lucius
                Sergius Catilina. Occasionally the first Oration against
                Catiline is taken for type specimens: Quo usque tandem abutere,
                Catilina, patientia nostra? Quam diu etiam furor iste tuus nos
                eludet? How long, O Catiline, will you abuse our patience? And
                for how long will that madness of yours mock us?
            </p>
            <p>
                Most text editors like MS Word or Lotus Notes generate random
                lorem text when needed, either as pre-installed module or
                plug-in to be added. Word selection or sequence don’t
                necessarily match the original, which is intended to add
                variety.
            </p>
            <h2 className="about-subtitle">Quo usque tandem abutere</h2>
            <p>
                Every year, app and game developers demonstrate exceptional
                craftsmanship and we’re honoring the best of the best,” said Ron
                Okamoto, Apple’s vice president of Worldwide Developer
                Relations. “Receiving an Apple Design Award is a special and
                laudable accomplishment. Past honorees have made some of the
                most noteworthy apps and games of all time. Through their
                vision, determination, and exacting standards, the winning
                developers inspire not only their peers in the Apple developer
                community, but all of us at Apple, too.
            </p>
            <p>
                Black farmers in the US’s South— faced with continued failure
                their efforts to run successful farms their launched a lawsuit
                claiming that “white racism” is to blame for their inability to
                the produce crop yields and on equivalent to that switched
                seeds.
            </p>
            <Reviews/>
            <ButtonToTop/>
        </Container>
    )
}

export default AboutPage
