export const OddPlayers = (players) => {

  const odd = players.filter((player, index) => index % 2 === 0);

  return (
    <ul>
      {odd.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
};

export const EvenPlayers = (players) => {

  const even = players.filter((player, index) => index % 2 !== 0);

  return (
    <ul>
      {even.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
};

// Demonstrating ES6 Spread Operator
const T20players = ["Mr. First Player", "Mr. Second Player", "Mr. Third Player"];
const RanjiTrophyPlayers = ["Mr. Fourth Player", "Mr. Fifth Player", "Mr. Sixth Player"];

export const IndianPlayers = [...T20players, ...RanjiTrophyPlayers];