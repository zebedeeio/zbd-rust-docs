import { CopyBlock, dracula } from 'react-code-blocks'
import Page from 'components/page'
import Footer from 'components/footer'
import DownloadButton from 'components/download-button'
import heroStyles from 'styles/pages/home/hero.module.css'
import contentStyles from 'styles/pages/home/content.module.css'
import { methods } from 'constants/methods'

const getEntity = (word) => {
  const getColor = (word) => {
    switch (word) {
      case 'Wallet':
        return 'rgba(82, 82, 82, 1)'
      case 'Charge':
        return 'rgba(121, 91, 6, 1)'
      case 'Static Charge':
        return 'rgba(20, 78, 6, 1)'
      case 'Withdrawal Request':
        return 'rgba(58, 56, 108, 1)'
      case 'Lightning Address':
        return 'rgba(124, 78, 134, 1)'
      case 'ZBD Gamertag':
        return 'rgba(121, 33, 33, 1)'
      case 'Utility':
        return 'rgba(104, 123, 27, 1)'
      case 'Keysend':
        return 'rgba(27, 106, 128, 1)'
      case 'Payment':
        return 'rgba(120, 37, 151, 1)'
      default:
        return 'rgba(82, 82, 82, 1)'
    }
  }

  return (
    <div
      style={{
        backgroundColor: getColor(word),
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 6,
        width: 'auto',
        display: 'inline-block',
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: '#fff',
        }}
      >
        {word}
      </span>
    </div>
  )
}

const codeSnippet = `
use std::env;
use zebedee_rust::{ln_address::*, ZebedeeClient};

#[tokio::main]
async fn main() {
    let apikey: String = env::var("ZBD_API_KEY").unwrap();
    let zebedee_client = ZebedeeClient::new().apikey(apikey).build();

    // Create a Lightning payment
    let payment = LnPayment {
        ln_address: String::from("dannym@zbd.gg"),
        amount: String::from("10000"),
        ..Default::default()
    };

    // Initiate the payment
    let payment_res = zebedee_client.pay_ln_address(&payment).await.unwrap();
    
    // Print the result
    println!("Internal transfer result: {:?}", payment_res);
}
  
`

const rustAuthSnippet = `
use zebedee_rust::{ZebedeeClient};

let zbd_client = ZebedeeClient::new()
  .apikey(YOUR_API_KEY_HERE)
  .build();

let payment = GamertagPayment{...};

let payment_res = zbd_client.pay_gamertag(&payment).await.unwrap();
 
`
export default function HomePage() {
  return (
    <Page>
      {/**
       * Hero
       */}
      <div className={heroStyles.root}>
        <img
          src={'/zbd-rust-logo.png'}
          alt="ZBD Logo"
          className={heroStyles.logoWrapper}
        />
        <div className={heroStyles.mainTitle}>
          <h1>Rust Crate for ZBD API</h1>
        </div>
        <div className={heroStyles.terminal}>
          <div className={heroStyles.codeSnippet}>
            <CopyBlock
              text={codeSnippet}
              language={'javascript'}
              showLineNumbers={false}
              wrapLines
              theme={dracula}
            />
          </div>
        </div>
        <div className={heroStyles.download}>
          <DownloadButton
            buttonOne={{ label: 'View Crate Docs', url: '/#api' }}
          />
          <a className={heroStyles.other} href="#sdks">
            View other SDK options
          </a>
        </div>
      </div>

      {/**
       * Content
       */}
      <div className={contentStyles.root} id="content">
        {/**
         * Setup
         */}
        <h2 id="setup">
          <a href="#setup">Getting Started</a>
        </h2>
        <p>
          The Rust Crate for ZBD API is available under{' '}
          <a href="https://crates.io/crates/zebedee-rust">
            <code>zebedee-rust</code>
          </a>
          . When building tools with ZBD support we encourage you to include{' '}
          <code>zbd</code> in the <code>keywords</code> field in{' '}
          <code>Cargo.toml</code>.
        </p>
        <p>
          All you have to do to get started is add <code>zebedee-rust</code> as
          a dependency to your Rust-based project. You can do so using{' '}
          <code>cargo</code>:
        </p>
        <pre>
          <code>cargo add zebedee_rust</code>
        </pre>
        <p>
          Now let's authenticate a specific Wallet with that ZBD Project's API
          Key.
        </p>

        {/**
         * Authentication
         */}
        <h2 id="auth">
          <a href="#auth">Authentication</a>
        </h2>
        <p>
          In order to authenticate your Project Wallet with the ZBD API, you
          will need to provide your ZBD Project's API Key to the{' '}
          <code>zebedee-rust</code> crate.{' '}
          <a
            href="https://docs.zebedee.io/docs/docs/dashboard-project-api"
            target="_blank"
          >
            You can find your Project API Key in the ZBD Developer Dashboard
          </a>
          .
        </p>
        <p>
          First you must import the <code>zebedee-rust</code> crate client into
          your codebase, and then instantiate it with your Project API Key
          (replace YOUR_API_KEY_HERE below with your actual ZBD Project's API
          Key).
        </p>
        <div className={heroStyles.codeSnippet}>
          <CopyBlock
            text={rustAuthSnippet}
            language={'rust'}
            showLineNumbers={false}
            wrapLines
            theme={dracula}
          />
        </div>

        <p>
          You're all set. Now let's move some money at the speed of the
          internet! Check the <a href="/#api">SDK API Reference</a> below for
          more information on how to use the <code>zebedee-rust</code> crate.
        </p>

        {/**
         * Project goals
         */}
        <h2 id="goals">
          <a href="#goals">zebedee-rust</a>
        </h2>
        <p>
          The goal of the project is to create a beautiful and extensible
          experience for developers using ZBD APIs in a Rust environment. Our
          focus will be primarily around providing parity with{' '}
          <a href="https://docs.zebedee.io/api/intro" target="_blank">
            ZBD REST API
          </a>
          , as well as providing further stability for developers.
        </p>
        <p>
          In the future, we anticipate adding zebedee-rust-only APIs to this
          crate. We also anticipate the community will come up with innovative
          additions to enhance what could be the simplest and most powerful
          Bitcoin payments API.
        </p>

        {/**
         * API Reference
         */}
        <h2 id="api">
          <a href="#api">API Reference</a>
        </h2>
        <p>
          Below is a comprehensive list of the methods and functions available
          in the <code>zebedee-rust</code> crate. These methods are ONLY
          available to the <code>ZebedeeClient</code> client instance after it's
          been properly authenticated with a Project's API Key.
        </p>
        <div className="table large">
          <table className="api">
            <thead>
              <tr>
                <td>Method</td>
                <td>Entity</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {methods.map((method) => (
                <tr key={method.name}>
                  <td>
                    <code>{method.name}</code>
                  </td>
                  <td>{getEntity(method.entity)}</td>
                  <td>
                    <p>{method.description}</p>
                    {method.params && method.params.length > 0 && (
                      <>
                        <p>Parameters:</p>
                        <table className="params">
                          <tbody>
                            {method.params.map((param) => (
                              <tr>
                                <td>
                                  <code>{param.name}</code>
                                  {param.extra && (
                                    <p className={heroStyles.extraParam}>
                                      {param.extra}
                                    </p>
                                  )}
                                </td>
                                <td>{param.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )}
                    {method.examples && method.examples.length > 0 && (
                      <>
                        <br />
                        <br />
                        <p>Resources:</p>
                        <table className="params">
                          <tbody>
                            {method.examples.map((example) => (
                              <tr>
                                <td>
                                  <a href={example.url} target="_blank">
                                    {example.name}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 id="community">
          <a href="#community">Community Support</a>
        </h2>
        <p>
          Feature Request? Bugfix? Recommendations? We're all ears! Head on over
          to the{' '}
          <a
            href="https://github.com/miketwenty1/zebedee-rust/issues"
            target="_blank"
          >
            zebedee-rust Issues
          </a>{' '}
          page and submit one. We also welcome Pull Requests and other
          contributions to the library.
        </p>
        <br />
        <div className={heroStyles.download}>
          <DownloadButton
            buttonOne={{
              label: 'Crate Source Code',
              url: 'https://github.com/miketwenty1/zebedee-rust',
            }}
          />
          <a
            className={heroStyles.other}
            href="https://github.com/zebedeeio"
            target="_blank"
          >
            View other ZBD GitHub repositories
          </a>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer />

      <style jsx>{`
        .table {
          overflow-x: auto;
        }

        .table:not(:last-child) > table {
          margin: 48px 0;
        }

        .table > table {
          min-width: 500px;
        }

        .table.large {
          width: 900px;
          max-width: 100vw;
          margin-left: -100px;
        }

        .table.large > table {
          width: 900px;
          max-width: 100%;
        }

        #content table thead td {
          color: var(--gray);
          font-size: 12px;
          text-transform: uppercase;
        }

        #content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          table-layout: fixed;
        }

        #content table p {
          margin-bottom: 0;
        }

        #content table p:not(:last-child) {
          margin-bottom: 1rem;
        }

        #content table table.params {
          display: flex;
        }

        #content table table.params tr {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        #content table table.params tr:not(:last-child) {
          margin-bottom: 1rem;
        }

        #content table table.params tbody td {
          width: 100%;
          border-color: transparent;
          padding: 0;
          color: var(--gray);
        }

        #content table td > * + table.params {
          margin-top: 24px;
        }

        #content td > table {
          margin: 0;
        }

        #content table td {
          vertical-align: top;
          border: 1px solid #444;
          position: relative;
          word-break: break-word;
        }

        #content #config-paths-table td {
          padding: 10px;
        }

        #content #config-paths-table td:not(:first-child) {
          text-align: center;
          width: 66.67%;
        }

        #content #config-paths-table {
          color: #fff;
          margin-top: 0;
        }

        #content #plugins-paths-table td {
          padding: 10px;
        }

        #content #plugins-paths-table td:not(:first-child) {
          text-align: center;
          width: 66.67%;
        }

        #content #plugins-paths-table {
          color: #fff;
          margin-top: 0;
        }

        #content td.soon {
          color: #555;
        }

        #content thead td {
          padding: 10px 24px;
        }

        #content tbody td {
          padding: 24px;
        }

        #content table.config td:nth-child(1),
        #content table.api td:nth-child(1) {
          width: 30%;
          color: var(--gray);
        }

        #content table.config td:nth-child(2),
        #content table.api td:nth-child(2) {
          width: 23%;
          color: var(--gray);
        }

        #content table.config tbody td:first-child {
          color: var(--fg);
        }

        #content table.api tbody td:first-child {
          color: var(--fg);
        }

        #content table.api > tbody > tr > td:nth-child(2) {
          width: 13%;
        }

        #content td > p:first-child {
          margin-top: 0;
        }

        @media screen and (max-width: 900px) {
          .table.large {
            width: 100%;
            max-width: 100%;
            margin-left: 0;
          }

          .table tr td:nth-child(2) {
            display: none;
          }
        }

        @media screen and (max-width: 800px) {
          #content table {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media screen and (max-width: 700px) {
          #content {
            padding: 20px;
          }

          #content h2 {
            margin-top: 0;
          }

          #content h2:first-child {
            padding-top: 0;
          }

          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow: auto;
          }

          #content table {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 20px;
          }

          #content .table-note:after {
            margin: 15px 0;
            content: 'Please note: the complete table information is available in bigger resolutions!';
            display: block;
            color: var(--gray);
          }
        }
      `}</style>
    </Page>
  )
}
