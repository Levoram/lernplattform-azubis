import LinkCard from "../components/LinkCard/LinkCard";
const Home = () => {
  return (
    <div className="centerbox">
      <h2>Willkommen!</h2>
      <hr></hr>
      <br></br>
      <p>Hallo und herzlich Willkommen zur neuen Schulungs-Webanwendung</p>
      <div style={{ margin: "2em 5em" }}>
        <LinkCard navlinktarget="/" text="Starte einen neuen Kurs" />
      </div>

      <p>
        ...oder wähle direkt aus den folgenden Themen aus, zu denen Du gerne
        mehr erfahren möchtest
      </p>
      <ul className="gridbox">
        <LinkCard navlinktarget="/" text="Java Basics"></LinkCard>
        <LinkCard navlinktarget="/" text="if-else Verzweigungen"></LinkCard>
        <LinkCard navlinktarget="/" text="Schleifen"></LinkCard>
        <LinkCard navlinktarget="/" text="Arrays"></LinkCard>
        <LinkCard navlinktarget="/" text="Vererbung Kapselung"></LinkCard>
        <LinkCard navlinktarget="/" text="Objekt-orientierung"></LinkCard>
      </ul>
    </div>
  );
};

export default Home;
