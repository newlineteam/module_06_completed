import "./App.css";
import { useState } from "react";
import Tabs from "./components/Tabs";

export default function App() {
  const [tabValue, setTabValue] = useState(TABS[0].value);

  return (
    <div className="App">
      <h1> Tabs Component (Completed)</h1>
      <main>
        <Tabs
          tabsList={TABS}
          value={tabValue}
          onValueChange={(val) => setTabValue(val)}
        />
      </main>
    </div>
  );
}

const TABS = [
  {
    id: "tab-1",
    label: "Stan Getz",
    value: "stan",
    content: (
      <q>
        My life is music, and in some vague, mysterious and subconscious way, I
        have always been driven by a taut inner spring which has propelled me to
        almost compulsively reach for perfection in music, often-in fact,
        mostly-at the expense of everything else in my life.
      </q>
    ),
  },
  {
    id: "tab-2",
    label: "Ella Fitzgerald",
    value: "ella",
    content: (
      <q>
        Just don’t give up trying to do what you really want to do. Where there
        is love and inspiration, I don’t think you can go wrong.
      </q>
    ),
  },
  {
    id: "tab-3",
    label: "Charlie Parker",
    value: "charlie",
    content: (
      <q>
        Music is your own experience, your thoughts, your wisdom. If you don’t
        live it, it won’t come out of your horn. They teach you there’s a
        boundary line to music. But, man, there’s no boundary line to art.
      </q>
    ),
  },
];
