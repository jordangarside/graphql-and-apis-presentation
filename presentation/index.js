// Import React
import React from "react";

import loadLanguages from "prismjs/components/index.js";
loadLanguages(["jsx"]);
loadLanguages(["bash"]);
loadLanguages(["json"]);
loadLanguages(["graphql"]);

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";
import Terminal from "spectacle-terminal";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#2a3746",
    secondary: "white",
    tertiary: "#E10098",
    quarternary: "#2a3746"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  state = {
    hello: 'world'
  };
  render() {
    const myState = this.state;
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            GraphQL and APIs
          </Heading>
          <Text margin="30px 0 0" textColor="tertiary" size={1} fit bold>
            https://graphql-and-apis-presentation.surge.sh
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={3} textColor="tertiary">
            Overview
          </Heading>
            <Appear order={1}>
              <Heading textColor="secondary" size={4} margin="10px 0 0 0">
                APIs
              </Heading>
            </Appear>
            <Appear order={2}>
              <Heading textColor="secondary" size={4} margin="20px 0 0 0">
                REST
              </Heading>
            </Appear>
            <Appear order={3}>
              <Heading textColor="secondary" size={4} margin="20px 0 0 0">
                GraphQL
              </Heading>
            </Appear>
            <Appear order={4}>
              <Heading textColor="secondary" size={4} margin="20px 0 0 0">
                GraphQL Demos
              </Heading>
            </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>
            What is an API?
          </Heading>
          <Appear order={1}>
            <Text
              margin="30px 0 0"
              textColor="secondary"
              textAlign="left"
              textSize={48}
              bold
            >
              <Heading margin="0 0 20px" textColor="secondary" size={6}>
                Wikipedia:
              </Heading>
              Web APIs are the defined interfaces through which interactions
              happen between an enterprise and applications that use its assets.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary" caps>
            Boring...
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            REST APIs
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            REpresentational State Transfer
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="secondary">
            Let's look at a couple...
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} margin="0 0 30px" textColor="tertiary">
            Facebook
          </Heading>
          <CodePane
            textSize={28}
            margin="0 0 30px"
            lang="jsx"
            theme="external"
            source={require("raw-loader!../assets/samples/facebook.get")}
          />
          <Appear order={1}>
            <div>
          <Heading size={5} margin="0 0 30px" textcolor="primary">
            is the same as
          </Heading>
          <CodePane
            textSize={24}
            lang="bash"
            theme="external"
            source={require("raw-loader!../assets/samples/facebook-input.sh")}
          />
          </div>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} margin="0 0 30px" textColor="tertiary">
            Facebook
          </Heading>
          <CodePane
            textSize={24}
            lang="json"
            theme="external"
            source={require("raw-loader!../assets/samples/facebook-output.json")}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} margin="0 0 30px" textColor="tertiary">
            elasticsearch
          </Heading>
          <Terminal
            title="1. human@human: ~(sh)"
            output={[
              <div style={{ fontSize: 24 }}>
                {require("raw-loader!../assets/samples/elasticsearch-input.sh")}
              </div>,
              <div style={{ fontSize: 16 }}>
                {require("raw-loader!../assets/samples/elasticsearch-output.json")}
              </div>
            ]}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} margin="0 0 30px" textColor="tertiary">
            elasticsearch
          </Heading>
          <Image src={require("../assets/images/elasticsearch-browser.png")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} margin="0 0 30px" textColor="tertiary">
            Google Fit
          </Heading>
          <CodePane
            textSize={24}
            lang="bash"
            theme="external"
            margin="0 0 30px"
            source={require("raw-loader!../assets/samples/google-fit-input.sh")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Graph Query Language
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary">
            Some History
          </Heading>
          <List>
            <Appear order={1}>
              <ListItem margin="10px 0 0 0" textSize={32}>
                REST formalized in 2000 by Roy Fielding's dissertation
              </ListItem>
            </Appear>
            <Appear order={2}>
              <ListItem margin="20px 0 0 0" textSize={32}>
                Facebook starts developing GraphQL internally in 2012
              </ListItem>
            </Appear>
            <Appear order={3}>
              <ListItem margin="20px 0 0 0" textSize={32}>
                Open Source version published in July 2015
              </ListItem>
            </Appear>
            <Appear order={4}>
              <ListItem margin="20px 0 0 0" textSize={32}>
                Took off pretty much immediately
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary" margin="0 0 30px">
            Response Structure
          </Heading>
          <Layout>
            <Fill>
              <Appear order={1}>
                <div>
                  <Heading margin="0 0 15px" size={6}>
                    Request
                  </Heading>
                  <CodePane
                    textSize={18}
                    lang="graphql"
                    theme="external"
                    source={require("raw-loader!../assets/samples/graphql.input")}
                  />
                </div>
              </Appear>
            </Fill>
            <Fill>
              <Appear order={2}>
                <div style={{ padding: "0 0 0 15px" }}>
                  <Heading margin="0 0 15px" size={6}>
                    Response
                  </Heading>
                  <CodePane
                    textSize={18}
                    lang="graphql"
                    theme="external"
                    source={require("raw-loader!../assets/samples/graphql.output")}
                  />
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="tertiary" margin="0 0 30px">
            Type System
          </Heading>
          <Layout>
            <Fill>
              <Appear order={1}>
                <div>
                  <CodePane
                    textSize={18}
                    lang="graphql"
                    theme="external"
                    source={require("raw-loader!../assets/samples/graphql.types")}
                  />
                </div>
              </Appear>
            </Fill>
            <Fill>
              <Appear order={2}>
                <div style={{ padding: "0 0 0 15px" }}>
                  <CodePane
                    textSize={18}
                    lang="graphql"
                    theme="external"
                    source={require("raw-loader!../assets/samples/graphql.query")}
                  />
                </div>
              </Appear>
              <Appear order={3}>
                <div style={{ padding: "30px 0 0 15px" }}>
                  <CodePane
                    textSize={18}
                    lang="graphql"
                    theme="external"
                    source={require("raw-loader!../assets/samples/graphql.mutation")}
                  />
                </div>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          transition={[]}
          textSize={24}
          lang="jsx"
          bgColor="primary"
          code={require("raw-loader!../assets/samples/graphql-setup")}
          ranges={[
            { loc: [0, 270], title: "Setting up a GraphQL Schema" },
            { loc: [3, 9], title: "Type Definitions" },
            { loc: [10, 18], title: "Hook-up the Query" },
            { loc: [19, 24], title: "Generate the Schema" },
            { loc: [24, 25], note: (<Link textColor="tertiary" href="https://launchpad.graphql.com/new" target="_blank">Let's check it out!</Link>) },
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary">
            Star Wars
          </Heading>
          <Heading size={4} textColor="primary">
            <Link href="https://graphql.org/swapi-graphql/" target="_blank">GraphiQL</Link>
          </Heading>
          <Heading size={4} textColor="primary">
            <Link href="https://apis.guru/graphql-voyager/" target="_blank">Graph System</Link>
          </Heading>
        </Slide>
        <CodeSlide
          transition={[]}
          textSize={22}
          lang="jsx"
          bgColor="primary"
          code={require("raw-loader!../assets/samples/graphql-render")}
          ranges={[
            { loc: [0, 270], title: "Query and Render GraphQL" },
            { loc: [0, 4], title: "Import Packages" },
            { loc: [5, 19], title: "Create Component with Data" },
            { loc: [20, 29], title: "Create the Root Component and Hook-up to API" },
            { loc: [30, 33], title: "Render to Browser" },
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary">
            Pokemans
          </Heading>
          <Heading size={4} textColor="primary">
            <Link href="https://graphql-pokemon.now.sh/" target="_blank">GraphiQL</Link>
          </Heading>
          <Heading size={4} textColor="primary">
            <Link href="https://react-relay-pokemon.now.sh/#/" target="_blank">Demo Application</Link>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="tertiary">
            Why GraphQL? and other stuff
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading textColor="secondary">
            Questions?
          </Heading>
          <Heading size={4} margin="30px 0 0"><Link textColor="primary" href="https://github.com/jordangarside/graphql-and-apis-presentation" target="_blank">GitHub</Link></Heading>
          <Heading size={4} margin="30px 0 0"><Link textColor="primary" href="https://github.com/FormidableLabs/spectacle" target="_blank">Spectacle</Link></Heading>
          <Heading size={4} margin="30px 0 0"><Link textColor="primary" href="https://surge.sh/" target="_blank">Surge</Link></Heading>
        </Slide>
      </Deck>
    );
  }
}
