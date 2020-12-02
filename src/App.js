import './App.css';
import Header1 from './Header1'
import Header2 from './Header2'
import Cover from './Cover'
import Small from './Small'
import Main from './Main'
import Image from './Image'
import Section from './Section'
import Profile from './Profile'

function App() {
  return (
    <div className="App">
      <Header1 />
      <Header2 />
      <Cover />
      <div className="small">
      <Small
        avatar="https://ke.jumia.is/cms/QuickLinks/JumiaMall.png"
        text="Official Stores"
        />
        <Small
        avatar="https://ke.jumia.is/cms/QuickLinks/1.png"
        text="Black Friday"
        />

        <Small
        avatar="https://ke.jumia.is/cms/QuickLinks/JumiaGlobal.png"
        text="Jumia Global"
        />

        <Small
        avatar="https://ke.jumia.is/cms/QuickLinks/JumiaOne_2.png"
        text="Airtime Cashback"
        />
        </div>

        

        <Main title="Recommended for you" />
        <Section title="BLACK FRIDAY DEALS"/>
        <Image imageurl="https://ke.jumia.is/cms/2020/BlackFriday/Live/mastercard/KE_Mastercard_DBD.jpg" />
        <Main title="Featured products"/>
        <Image imageurl="https://ke.jumia.is/cms/2020/BlackFriday/Live/HP/W4/Tue/KE_BFLive_FreeShipping_SB-(1).png" />
        <Section title="BLACK FRIDAY DEALS"/>
        <Profile />
              
    </div>
  );
}

export default App;
