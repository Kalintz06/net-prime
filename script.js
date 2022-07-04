//composant header
const Header = {
  template: `
<div>
    <h1>NetPrimePlus</h1>
    <p>La plateforme video completement originale</p>
</div>
`,
};

const Main = {
  props: {
    Titre: String,
    NbEcran: String,
    Video: String,
    PrixEnEuros: Number,
  },
  template: `
    <div>
        <h3>{{Titre}}</h3>
        <p>{{NbEcran}}</p>
        <p>{{Video}}</p>
        <p>{{PrixEnEuros}}</p>
        <button>s'abonner</button>
    </div>
    `,
};
const Footer = {
  template: `
    <div>
    <h5>NetPrimePlus<h5>
    <p>Tout droits reservé</p>
    </div>
    `,
};

//composant racine
const RootComponent = {
  components: {
    Header: Header,
    Main: Main,
    Footer: Footer,
  },
  template: `
    <div>
        <Header></Header>
        
        <h4>Nos Formules d'abonnement</h4>
     <p>Toutes nos formules d'abonnement sont sans engagements et
     resiliable a tout moment.Paiement pas CB, Paypal et en bitcoins.
     </p>

        <Main Titre="SOLO" NbEcran="Ecran 1" Video="Video HD" PrixEnEuros="9.99€/mois"></Main>
        <Main Titre="FAMILY" NbEcran="Ecrans 4" Video="Video HD" PrixEnEuros="12.99€/mois"></Main>
        <Main Titre="FAMILY 4K" NbEcran="Ecrans 4" Video="Video 4k" PrixEnEuros="15.99€/mois"></Main>
        <Footer></Footer>
    </div>
    `,
};

Vue.createApp(RootComponent).mount("#root");
