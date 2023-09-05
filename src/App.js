import Card from "./components/Card";
import "./App.css";
import userData from "./userData";

export default function App() {
  const userDisplay = userData.map((user) => {
    return (
      <Card
        key={user.id}
        name={user.name}
        phrase={user.company.catchPhrase}
        company={user.company.name}
        zipcode={user.address.zipcode}
      />
    );
  });

  return <div className="App">{userDisplay}</div>;
}
