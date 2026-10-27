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

interface AlbumProps {
    /** Tytuł albumu */
    title: string;

    /** Wykonawca */
    band: string;

    /** Gatunek */
    genre: string;

    /** Rok wydania */
    year: string;

    /** Lista utworow */
    tracks: { title: string; time: string }[];

    /** Sciezka do plakatu */
    imgsrc: string;
}

interface UtworProps {
    /** Tytuł utworu */
    title: string;

    /** Dlugosc */
    time: string;
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
            <div id="poster"><Album imgsrc="./src/assets/acdc1.jpg" title="High voltage" band="AC/DC" genre="Rock" year="1985" tracks={[{ title: "song 1", time: "3:24" }, { title: "another song", time: "2:20" }, { title: "TNT", time: "2:38" }, { title: "TNT 2", time: "3:12" }, { title: "TNT 3", time: "3:45" }]} /></div>
             <div id="poster"><Album imgsrc="./src/assets/acdc1.jpg" title="Back in Black" band="AC/DC" genre="Rock" year="1985" tracks={[{ title: "Back in Black", time: "4:05" }, { title: "Hells Bells", time: "3:45" }, { title: "Who Made Who", time: "3:20" }, { title: "Firebreather", time: "3:12" }, { title: "For the Loving IPA", time: "3:00" }, { title: "For the Loving IPA 2", time: "3:37" }, { title: "For the Loving IPA 3", time: "3:56" }]} /></div>
              <div id="poster"><Album imgsrc="./src/assets/acdc1.jpg" title="Shoot to Thrill" band="AC/DC" genre="Rock" year="1985" tracks={[{ title: "Shoot to Thrill", time: "2:40" }, { title: "another song", time: "2:11" }, { title: "TNT", time: "2:38" }, { title: "Thunderstruck", time: "3:12" }, { title: "Highway to Hell", time: "2:34" }, { title: "TNT 4", time: "5:00" }, { title: "TNT 5", time:"1:00" }, { title: "Shoot to Thrill", time: "2:40" }, { title: "another song", time: "2:11" }, { title: "TNT", time: "2:38" }]} /></div>
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

function Album(props: AlbumProps) {
    return (
        <>
        <img src={props.imgsrc} />
        <h4>{props.title}</h4>
        <p>Wykonawca: {props.band}</p>
        <p>Gatunek: {props.genre}</p>
        <p>Rok wydania: {props.year}</p>

        <br />
        <p>Lista utworów:</p>
        {props.tracks.map((utwor: UtworProps, index: number) => (
                <Utwor
                    key={index}
                    title={utwor.title}
                    time={utwor.time}
                />
            ))}
        </>
    )
}

function Utwor(props: UtworProps) {
    return (
        <>
            <p>{props.title} - {props.time}</p>
        </>
    )
}
export default App;