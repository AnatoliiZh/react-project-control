type ArticleProps = {
    id:number
    title: string
    category: string
    date: string
    comments: number
    image:string
    description?:string
    content:string

}

const articlesArray:ArticleProps[] = [
    {
        id:1,
        title: "Meditation as Medicine on the Rise – Fitness",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/1crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion." ,
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p> <img src='https://flawlessdigitalagency.com/alino/wp-content/uploads/2022/03/blog-red-pattern.jpg' width='100%'>" 
    },
    {
        id:2,
        title: "Cute Pastel Outfit Combinations and Ideas to Wear Pastel",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/2crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"         
    },
    {
        id:3,
        title: "It Really Have Good Feeling When You Enjoy Nature",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/3crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:4,
        title: "10 Ways To Meet More People While Traveling Alone",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/4crop.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:5,
        title: "What to Think About When Everything Goes Wrong",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/1mr.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.',
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"
    },   
    {
        id:6,
        title: "The curly shag has tons of pretty texture and attitude",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/2mr_crop.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.',
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"
    },
    {
        id:7,
        title: "This japanese take on crème flan will blow your mind",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/3mr.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.',
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"
    },     
    {
        id:8,
        title: "Here’s All the Fashion News You already Missed",
        category: "Fashion",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/4mr.webp",
        description:'Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.',
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"
    },
    {
        id:9,
        title: "Tonight what heights we’ll hit, on with the show this is it",
        category: "Health",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/9.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:10,
        title: "Discover a better way to capture store, and waiting for an invitation see the world",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/10.jpg",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:11,
        title: "Discover a better way to capture store, and waiting for an invitation see the world",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/11.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:12,
        title: "Buy Merch for a Good Cause With These VICE Collabs",
        category: "Lifestyle",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/12.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:13,
        title: "If you’ve been waiting for an invitation, this stories is it",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/13.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:14,
        title: "Make a beauty selfie 2022: new life to go",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/14.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    },
    {
        id:15,
        title: "Everything You Should To Know About CBD Skincare",
        category: "Travel",
        date: "Mar 6, 2022",
        comments: 0,
        image:"/images/15.webp",
        description:"Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.",
        content:"<p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez from expanding her property collection. Lopez has reportedly added to her real estate holdings an eight-plus acre estate in Bel-Air anchored by a multi-level mansion.</p> <p>The property, complete with a 30-seat screening room, a 100-seat amphitheater and a swimming pond with sandy beach and outdoor shower, was asking about $40 million, but J. Lo managed to make it hers for $28 million. As the Bronx native acquires a new home in California, she is trying to sell a gated compound.</p> <p>Black farmers in the US's South— faced with continued failure their efforts to run successful farms their launched a lawsuit claiming that “white racism” is to blame for their inability to the produce crop yields and on equivalent to that switched seeds.<p> <h3>What Will Be The Next Step to Complete?</h3> <p>The “new '20s” idea might not work—there were a lot more young people in the United States then than now; a reprise of the world-changing inventions and discoveries of the 1920s would be a big surprise to those economists who believe that we have been in an invention dry spell since the 1970s. In his Businessweek piece, Peter Coy largely agrees, writing, “In all probability … the U.S. will continue to wrestle with 'secular</p>"      
    }
        
]

export default articlesArray