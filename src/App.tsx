import "./App.css";

interface FilmProps {
    /** Tytuł filmu */
    title: string;

    /** Rok wydania */
    year: string;

    /** Ścieżka do plakatu */
    imgsrc: string;
}

interface KsiazkaProps {
    /** Tytuł ksiazki */
    title: string;

    /** Rok wydania */
    year: string;

    /** Liczba stron */
    pages:string

    /** Ścieżka do plakatu */
    imgsrc: string;
}

function App() {
    return (
        <>
        <h1>Filmy</h1>
        <div id="row">
            <div id="poster"><Poster title="Terminator 2" year="1991" imgsrc="./src/assets/terminator.jpg" /></div>
            <div id="poster"><Poster title="Rybki z ferajny" year="2004" imgsrc="./src/assets/rybkizferajny.jpg" /></div>
            <div id="poster"><Poster title="Shrek" year="2001" imgsrc="./src/assets/shrek.jpg" /></div>
        </div>

        <h1>Książki</h1>
        <div id="row">
            <div id="poster"><Book title="Dziennik cwaniaczka 1" year="2000" pages="400" imgsrc="./src/assets/dziennik1.jpg" /></div>
            <div id="poster"><Book title="Dziennik cwaniaczka 2" year="2001" pages="450" imgsrc="./src/assets/dziennik2.jpg" /></div>
            <div id="poster"><Book title="Dziennik cwaniaczka 3" year="2002" pages="500" imgsrc="./src/assets/dziennik3.jpg" /></div>
        </div>

        <h1>Albumy</h1>
        <div id="row">
            <div id="poster"><Album imgsrc="./src/assets/acdc1.jpg" title="Album 1" band="AC/DC" genre="Rock" year="1985" tracks={[{ title: "song 1", time: "3:24" }, { title: "another song", time: "2:20" }]} /></div>
        </div>
        </>
    )
}

function Poster(props: FilmProps) {
    return (
        <>
        <img src={props.imgsrc} />
        <h4> {props.title} </h4>
        <p> {props.year} </p>
        </>
    )
}

function Book(props: KsiazkaProps) {
    return (
        <>
        <img src={props.imgsrc} />
        <h4>{props.title}</h4>
        <p>Rok wydania: {props.year}</p>
        <p>Strony: {props.pages}</p>
        </>
    )
}

function Album(props: any) {
    return (
        <>
        <img src={props.imgsrc} />
        <h4>{props.title}</h4>
        <p>Wykonawca: {props.band}</p>
        <p>Gatunek: {props.genre}</p>
        <p>Rok wydania: {props.year}</p>

        <br />
        <p>Lista utworów:</p>
        {props.tracks.map((utwor: any, index: any) => (
                <Utwor
                    key={index}
                    title={utwor.title}
                    time={utwor.time}
                />
            ))}
        </>
    )
}

function Utwor(props: any) {
    return (
        <>
            <p>{props.title} - {props.time}</p>
        </>
    )
}
export default App;