import './App.css';
import avatar from './img/avatar.png';
import facebook from './img/001-facebook-app-symbol.png';
import instagram from './img/001-instagram.png';
import linkedin from './img/001-linkedin.png';
import twitter from './img/001-twitter.png';
import * as React from 'react';
import { useState } from 'react';
import { Alignment, Classes, H3, H5, InputGroup, Navbar, Switch, Tab, TabId, Tabs } from "@blueprintjs/core";
import { Callout, Code, Intent } from "@blueprintjs/core";
import { Icon, Tree, TreeNodeInfo } from "@blueprintjs/core";
import { Button, Card, Elevation, Label, Slider } from "@blueprintjs/core";
import {  ButtonGroup, Divider } from "@blueprintjs/core";
import { IconSize } from "@blueprintjs/core";
import { Tag } from "@blueprintjs/core";
import {
  Menu,
  MenuItem,
  Spinner
} from "@blueprintjs/core";

function App() {
  const [animate, setAnimate] = useState(true);
  const [activePanelOnly, setActivePanelOnly] = useState(true);
  const [vertical, setVertical] = useState(true);
  return (
    <div className="App">
      <img src={avatar} style={{display: 'block', borderRadius: '50%', width: '60px', margin: '24px auto'}} />
      <Tabs
          animate={animate}
          id="TabsExample"
          key={vertical ? "vertical" : "horizontal"}
          renderActiveTabPanelOnly={activePanelOnly}
          vertical={vertical}
          align={Alignment.RIGHT}
      >
          <Tab id="info" title="Information" panel={<Info />} />
          <Tab id="exp" title="Erfahrung" panel={<Exp />} />
          <Tab id="edu" title="Bildung" panel={<Edu />} />
          <Tab id="cover" title="Über mich" panel={<Cover />} />
          <Tab id="cont" title="Kontakt" panel={<Cont />} />
          <Tabs.Expander />
      </Tabs>
      <Divider style={{margin: '32px 0 16px'}} />
      <a href="https://www.instagram.com/loukas5844/" target="blank"><img src={instagram} alt="" className="social" /></a>
      <a href="https://twitter.com/loukasanast" target="blank"><img src={twitter} alt="" className="social" /></a>
      <a href="https://www.linkedin.com/in/loukas-anastasiou-92877b115/" target="blank"><img src={linkedin} alt="" className="social" /></a>
      <a href="https://www.facebook.com/loukas.anastasiou.77" target="blank"><img src={facebook} alt="" className="social" /></a>
    </div>
  );
}

const Info = () => (
  <div>
    <h1 style={{marginTop: 0}}>Persönliches</h1>
    <Callout intent={Intent.PRIMARY}>
    <strong>Loukas Anastasiou</strong><br />
    Keferloherstr. 101c<br />
    80807 München<br />
    Deutschland<br /><br />
    0160 9281 33 45<br />
    <a href="mailto:job.apply@anastasiou.io">job.apply@anastasiou.io</a>
    </Callout>
    <Divider style={{margin: '32px 0'}} />
    <H5>
      Verfübare Verweise
    </H5>
    <a className="bp4-button bp4-minimal bp4-icon-globe" href="https://github.com/loukasanast" target="_blank">Github &ndash; github.com/loukasanast</a><br />
    <a className="bp4-button bp4-minimal bp4-icon-globe" href="https://dribbble.com/loukasmuc" target="_blank">Dribbble &ndash; dribbble.com/loukasmuc</a><br />
    <a className="bp4-button bp4-minimal bp4-icon-globe" href="https://behance.net/loukasanast" target="_blank">Behance &ndash; behance.net/loukasanast</a><br />
    <a className="bp4-button bp4-minimal bp4-icon-globe" href="https://hillroy.myshopify.com/" target="_blank">Shopify &ndash; hillroy.myshopify.com</a><br />
    <a className="bp4-button bp4-minimal bp4-icon-globe" href="https://www.tinyurl.com/3umrpupv" target="_blank">LinkedIn &ndash; tinyurl.com/3umrpupv</a>
    <Divider style={{margin: '32px 0'}} />
    <H5>
        Relevante Skills
    </H5>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>HTML5</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>CSS3</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>JavaScript</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>jQuery</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>SCSS</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Angular</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>React</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Node</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>TypeScript</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>C++</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>C#</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Asp.NET Core</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Visual Studio</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Java</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Spring Framework</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>IntelliJ</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Docker</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Azure</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>AWS</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Photoshop</Tag>
    <Tag minimal={true} round={true} style={{margin: '4px'}}>Adobe XD</Tag>
  </div>
);

const Exp = () => (
  <div>
    <h1 style={{marginTop: 0}}>Berufserfahrung</h1>
    <div style={{margin: '0 0 24px 0'}}>
      <span className="bp4-monospace-text"><strong>Upwork Inc</strong> / Freelance Software Developer & UX Designer</span><br />
      <span className="bp4-text-small bp4-text-muted">SEP 2018 - AKTUELL, München</span><br />
      <p className="bp4-running-text">Übernahme von mittelgroßen internationalen Projekten. Entwicklung,
      Gestaltung und Pflege meines zentralen Webauftritts. Ergreifung von
      Marketing Maßnahmen (SEO, SEM) bzw. Marktanalyse und
      Zielgruppenbestimmung für kommerzielle Projekte.</p>
    </div>
    <div style={{margin: '0 0 24px 0'}}>
      <span className="bp4-monospace-text"><strong>Xcelsus GmbH</strong> / .NET Entwickler</span><br />
      <span className="bp4-text-small bp4-text-muted">NOV 2017 - APR 2018, München</span><br />
      <p className="bp4-running-text">Mitwirkung an der Entwicklung von webbasierten Diensten. Entwicklung
      und Konfiguration von Modellen und Steuerungsmodulen auf Basis der
      Technologien .NET Core und Asp.NET MVC. Herstellung von UI
      Komponenten und Teilnahme am Bereitstellungsprozess.</p>
    </div>
    <div style={{margin: '0 0 24px 0'}}>
      <span className="bp4-monospace-text"><strong>Selligent GmbH</strong> / Web & Campaign Developer</span><br />
      <span className="bp4-text-small bp4-text-muted">JAN 2017 - SEP 2017, München</span><br />
      <p className="bp4-running-text">Teilnahme an internen Trainingsmaßnahmen zum Aneignen der
      Entwicklungsumgebung und Workflow–Lösung Selligent Cloud. Einsatz
      des erworbenen Wissens durch Entwicklung und Koordination von
      Email–Kampanien.</p>
    </div>
    <div>
      <span className="bp4-monospace-text"><strong>Grobman & Schwarz GmbH</strong> / Praktikant Entwicklung</span><br />
      <span className="bp4-text-small bp4-text-muted">JUL 2016 - DEZ 2016, München</span><br />
      <p className="bp4-running-text">Gestaltung und Weiterentwicklung des firmeneigenen sozialen
      Netzwerkes durch Einsatz der Technologien: Asp.NET MVC und jQuery.
      Teilnahme am Training mit Thema: Collaboration Software, Git und
      Visual Studio Online (TFS).</p>
    </div>
  </div>
);

const Edu = () => (
  <div>
    <h1 style={{marginTop: 0}}>Training & Zertifizierung</h1>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Brunel University London / Multimedia Technology Cert.H.E.</h4>
      <span className="bp4-text-small bp4-text-muted">SEP 2006 - JUL 2007, London</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Microsoft / MCP Exam 70–480</h4>
      <span className="bp4-text-small bp4-text-muted">JAN 2021, München</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">MTA: Software Development Fundamentals</h4>
      <span className="bp4-text-small bp4-text-muted">JAN 2020, München</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">MTA: HTML5 Application Development Fundamentals</h4>
      <span className="bp4-text-small bp4-text-muted">FEB 2020, München</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Institut für Lernsysteme / C# Softwareentwickler</h4>
      <span className="bp4-text-small bp4-text-muted">DEZ 2013 - MÄR 2014, Fernunterricht</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Institut für Lernsysteme / PHP-MySql Datenbankentwickler</h4>
      <span className="bp4-text-small bp4-text-muted">APR 2014 - JUL 2015, Fernunterricht</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Studiengemeinschaft Darmstadt / Webdesigner</h4>
      <span className="bp4-text-small bp4-text-muted">FEB 2004 - JAN 2005, Fernunterricht</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Studiengemeinschaft Darmstadt / Webmaster</h4>
      <span className="bp4-text-small bp4-text-muted">JAN 2005 - SEP 2005, Fernunterricht</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Udacity / React</h4>
      <span className="bp4-text-small bp4-text-muted">JAN 2020 - MÄR 2020, Online</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Udacity / Front End Developer</h4>
      <span className="bp4-text-small bp4-text-muted">JAN 2020 - MÄR 2020, Online</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Udacity / Java Programming</h4>
      <span className="bp4-text-small bp4-text-muted">FEB 2021 - APR 2021, Online</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">Treehouse / Front End Web Development</h4>
      <span className="bp4-text-small bp4-text-muted">OKT 2017 - JAN 2018, Online</span>
    </div>
    <div style={{margin: '0 0 12px 0'}}>
      <h4 className="bp4-monospace-text">CFI / Introduction to Capital Markets / Math Fundamentals for Capital Markets / Economics for Capital Markets</h4>
      <span className="bp4-text-small bp4-text-muted">NOV 2022 - JAN 2023, Online</span>
    </div>
  </div>
);

const Cover = () => (
  <div>
    <h1 style={{marginTop: 0}}>Read carefully&hellip;</h1>
    <p className="bp4-running-text" style={{margin: '0 0 12px 0'}}>
      Ich bin ein passionierter Entwickler mit zusätzlicher Erfahrung in UX/UI
      Design. Über die Jahre habe ich mich auf die Entwicklung von SPA
      Anwendungen unter Verwendung von Angular und ReactJS mit
      integriertem Backend basierend auf Asp.NET bzw. dem Spring
      Framework spezialisiert.
    </p>
    <p className="bp4-running-text" style={{margin: '0 0 12px 0'}}>
      Schon in meinem Studium Multimedia Technology and Design galt
      mein Hauptinteresse der Entwicklung von Websites mittels JavaScript,
      C#, und Java, dabei habe ich mir die Verwendung von Maven sowie der
      Webpack Bibliothek angeeignet. Darüber hinaus verfasse ich mich
      gerne mit ORM Technologien wie Hibernate und dem Entity Framework.
      Mit 10 Jahren praktischer Erfahrung bei der effizienten
      Programmierung von Websites und Anwendungen mit modernem
      JavaScript bzw. TypeScript, C# und Java bin ich zuversichtlich, dass ich
      eine hervorragende Ergänzung für Ihre Organisation sein werde.
    </p>
    <p className="bp4-running-text" style={{margin: '0 0 12px 0'}}>
      Eine Vielzahl von Weiterbildungen hat es mir ermöglicht bei der
      Entwicklung von benutzerfreundlichen Websites und Anwendungen auf
      dem neuesten Stand zu bleiben. Ich habe eine modularisierte
      Angehensweise was meine Lernaktivitäten angeht realisiert, und seit
      2015 über 200 Online–Kurse bei Anbietern wie der Stanford University
      und dem MIT erfolgreich abgeschlossen.
    </p>
    <p className="bp4-running-text" style={{margin: '0 0 12px 0'}}>
      Ich habe meine Berufserfahrung durch freiberufliche Kooperation mit
      inspirierenden Unternehmen, aber auch durch ein Praktikum im Bereich
      UI Design/Frontend und eine kurzfristige Beschäftigung als Frontend
      Entwickler bei Selligent gesammelt.
    </p>
  </div>
);

const Cont = () => (
  <div>
    <h1 style={{marginTop: 0}}>Mich endlich kontaktieren&hellip;</h1>
    <form action="https://submit-form.com/wnonS3lr">
    <InputGroup
                        asyncControl={true}
                        disabled={false}
                        large={false}
                        leftIcon="user"
                        placeholder="Vorname"
                        small={false}
                        value=""
                        name="vorname"
                        required
                        style={{margin: '0 0 12px 0'}}
                    />
      <InputGroup
                        asyncControl={true}
                        disabled={false}
                        large={false}
                        leftIcon="envelope"
                        placeholder="E-Mail"
                        small={false}
                        value=""
                        name="email"
                        required
                        style={{margin: '0 0 12px 0'}}
                    />
      <textarea class="bp4-input bp4-fill" dir="auto" placeholder="Nachricht" required style={{margin: '0 0 12px 0', height: '160px'}}></textarea>
      <Button className="bp4-button" icon="send-message" type="submit">Send&hellip;</Button>
    </form>
  </div>
);

export default App;
