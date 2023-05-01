import Page from 'components/page'
import Footer from 'components/footer'
import DownloadButton from 'components/download-button'
import heroStyles from 'styles/pages/home/hero.module.css'
import contentStyles from 'styles/pages/home/content.module.css'

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://api.github.com/repos/vercel/hyper/releases/latest'
//   )
//   const latestRelease = await res.json()

//   return {
//     props: {
//       latestRelease,
//     },
//     revalidate: 60 * 60 * 24,
//   }
// }

export default function HomePage() {
  return (
    <Page>
      {/**
       * Hero
       */}
      <div className={heroStyles.root}>
        <img
          src={'https://cdn.zebedee.io/an/zbd/zbd-circle-github.png'}
          alt="ZEBEDEE Logo"
          className={heroStyles.logoWrapper}
        />
        <div className={heroStyles.terminal}>
          <img
            src="/zbd-node-snippet.png"
            alt="@zbd/node snippet"
            className={heroStyles.imgWrapper}
          />
        </div>
        <div className={heroStyles.download}>
          <DownloadButton fixedWidth />
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
          The Node.js library for ZEBEDEE API is available under{' '}
          <a href="https://github.com/zebedeeio/zbd-node">
            <code>@zbd/node</code>
          </a>
          . When building tools with ZEBEDEE support we encourage you to include{' '}
          <code>zebedee</code> in the <code>keywords</code> field in{' '}
          <code>package.json</code>.
        </p>
        <pre>
          <code>$ npm install @zbd/node</code>
        </pre>
        <p>
          Or if you are using <code>yarn</code>:
        </p>
        <pre>
          <code>$ yarn add @zbd/node</code>
        </pre>
        <p>
          Then edit and add it to <code>plugins</code>
        </p>
        <pre>
          <code>
            module.exports = {'{'}
            {'\n'}
            {'\n'}
            {'  '}config: {'{'} /*... */ {'}'},{'\n'}
            {'\n'}
            {'  '}plugins: [{'\n'}
            {'    '}
            <b>"hyperpower"</b>
            {'\n'}
            {'  '}]{'\n'}
            {'\n'}
            {'}'};
          </code>
        </pre>
        <p>
          <code>Hyper</code> will show a notification when your modules are
          installed to .
        </p>

        {/**
         * Project goals
         */}
        <h2 id="hashtag-goals">
          <a href="#hashtag-goals">@zbd/node</a>
        </h2>
        <p>
          The goal of the project is to create a beautiful and extensible
          experience for developers using ZEBEDEE APIs in a Node.js environment.
          Our focus will be primarily around providing parity with{' '}
          <a href="https://docs.zebedee.io/api/intro" target="_blank">
            ZEBEDEE REST API
          </a>
          , as well as providing further stability for developers.
        </p>
        <p>
          In the future, we anticipate adding Node.js-only APIs to this SDK. We
          also anticipate the community will come up with innovative additions
          to enhance what could be the simplest and most powerful Bitcoin
          payments API.
        </p>

        {/**
         * API Reference
         */}
        <h2 id="api">
          <a href="#api">API Reference</a>
        </h2>
        <p>
          Extensions are universal Node.js modules loaded by both Electron and
          the renderer process.
        </p>
        <p>
          The extension system is designed around <b>composition</b> of the APIs
          we use to build the terminal: <code>React</code> components and{' '}
          <code>Redux</code> actions.
        </p>
        <p>
          Instead of exposing a custom API method or parameter for every
          possible customization point, we allow you to intercept and compose
          every bit of functionality!
        </p>
        <p>
          The only knowledge that is therefore required to successfully extend{' '}
          <code>Hyper</code> is that of its underlying open source libraries.
        </p>
        <p>
          You can find additional details about plugin development{' '}
          <a href="https://github.com/vercel/hyper/blob/master/PLUGINS.md">
            in the Hyper repository
          </a>
          .
        </p>
        <p>Your module has to expose at least one of these methods:</p>
        <div className="table large">
          <table className="api">
            <thead>
              <tr>
                <td>Method</td>
                <td>Invoked from</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>onApp</code>
                </td>
                <td>Electron</td>
                <td>
                  <p>
                    Invoked when the app first loads. If a plugin reloads, it's
                    invoked again with the existing app.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>app</code>
                        </td>
                        <td>The electron app.</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onWindow</code>
                </td>
                <td>Electron</td>
                <td>
                  <p>
                    Invoked when each window is created. If a plugin reloads,
                    it's invoked again with the existing windows.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>window</code>
                        </td>
                        <td>
                          An electron <code>BrowserWindow</code>.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onUnload</code>
                </td>
                <td>Electron</td>
                <td>
                  <p>Invoked when a plugin is removed by the user.</p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>app</code>
                        </td>
                        <td>The electron app.</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>decorateConfig</code>
                </td>
                <td>Electron / Renderer</td>
                <td>
                  <p>
                    <b>v0.5.0+</b>. Allows you to decorate the user's
                    configuration.
                    <br />
                    Useful for themeing or custom parameters for your plugin.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>config</code>
                        </td>
                        <td>
                          The <code>config</code> object
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>decorateEnv</code>
                </td>
                <td>Electron</td>
                <td>
                  <p>
                    <b>v0.7.0+</b>. Allows you to decorate the user's
                    environment by returning a modified environment object.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>environment</code>
                        </td>
                        <td>
                          The <code>environment</code> object
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>decorateMenu</code>
                </td>
                <td>Electron</td>
                <td>
                  <p>
                    Invoked with the Electron's <code>Menu</code> template. If a
                    plugin reloads, it's called again and the menu is refreshed.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>menu</code>
                        </td>
                        <td>The menu template object</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>decorateBrowserOptions</code>
                </td>
                <td>Electron</td>
                <td>
                  <p>
                    Allows you to decorate Electron's <code>BrowserWindow</code>{' '}
                    options when a new window is created.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>options</code>
                        </td>
                        <td>
                          The <code>BrowserWindow</code> options object.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onRendererWindow</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    Invoked when a plugin is first loaded or subsequently
                    reloaded in each window.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>window</code>
                        </td>
                        <td>The window object</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>middleware</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    A custom Redux middleware that can intercept any action.
                    Subsequently we invoke the <code>thunk</code>
                    middleware, which means your middleware can
                    <code>next</code> thunks.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>reduceUI</code>
                  <br />
                  <code>reduceSessions</code>
                  <br />
                  <code>reduceTermGroups</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    A custom reducer for the <code>ui</code>,{' '}
                    <code>sessions</code> or <code>termgroups</code> state
                    shape.
                  </p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>state</code>
                        </td>
                        <td>The Redux state object</td>
                      </tr>
                      <tr>
                        <td>
                          <code>action</code>
                        </td>
                        <td>The action object</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getTabsProps</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    Passes down props from <code>&lt;Tabs&gt;</code>
                    to the <code>&lt;Header&gt;</code> component. Must return
                    the composed props object.
                  </p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>parentProps</code>
                        </td>
                        <td>Props form the parent component.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>props</code>
                        </td>
                        <td>
                          The existing properties that will be passed to the
                          component.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getTabProps</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    Passes down props from <code>&lt;Tab&gt;</code>
                    to the <code>&lt;Tabs&gt;</code> component. Must return the
                    composed props object.
                  </p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>uid</code>
                        </td>
                        <td>Tab / Term uid</td>
                      </tr>
                      <tr>
                        <td>
                          <code>parentProps</code>
                        </td>
                        <td>Props form the parent component.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>props</code>
                        </td>
                        <td>
                          The existing properties that will be passed to the
                          component.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getTermGroupProps</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    Passes down props from <code>&lt;Terms&gt;</code>
                    to the <code>&lt;TermGroup&gt;</code> component. Must return
                    the composed props object.
                  </p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>uid</code>
                        </td>
                        <td>TermGroup uid</td>
                      </tr>
                      <tr>
                        <td>
                          <code>parentProps</code>
                        </td>
                        <td>Props form the parent component.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>props</code>
                        </td>
                        <td>
                          The existing properties that will be passed to the
                          component.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getTermProps</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    Passes down props from <code>&lt;TermGroup&gt;</code>
                    to the <code>&lt;Term&gt;</code> component. Must return the
                    composed props object.
                  </p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>uid</code>
                        </td>
                        <td>Term uid</td>
                      </tr>
                      <tr>
                        <td>
                          <code>parentProps</code>
                        </td>
                        <td>Props form the parent component.</td>
                      </tr>
                      <tr>
                        <td>
                          <code>props</code>
                        </td>
                        <td>
                          The existing properties that will be passed to the
                          component.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>mapHyperState</code>
                  <br />
                  <code>mapTermsState</code>
                  <br />
                  <code>mapHeaderState</code>
                  <br />
                  <code>mapNotificationsState</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    A custom mapper for the state properties that{' '}
                    <a
                      href="https://github.com/vercel/hyper/tree/master/lib/containers"
                      target="_blank"
                      rel="noopener"
                    >
                      container components
                    </a>{' '}
                    receive. Note that for children components to get these
                    properties, you have to pass them down using the
                    corresponding methods (like <code>getTermProps</code>).
                  </p>
                  <p>Must return an extended object of the map passed.</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>state</code>
                        </td>
                        <td>
                          The <code>Redux</code> global state
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>map</code>
                        </td>
                        <td>
                          The existing map of properties that will be passed to
                          the component.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>mapHyperDispatch</code>
                  <br />
                  <code>mapTermsDispatch</code>
                  <br />
                  <code>mapHeaderDispatch</code>
                  <br />
                  <code>mapNotificationsDispatch</code>
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    A custom mapper for the dispatch properties. Must return an
                    extended object of the map passed.
                  </p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>dispatch</code>
                        </td>
                        <td>The Redux dispatch function</td>
                      </tr>
                      <tr>
                        <td>
                          <code>map</code>
                        </td>
                        <td>
                          The existing map of properties that will be passed to
                          the component.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <code>decorateHyper</code>
                  <br />
                  <code>decorateNotifications</code>
                  <br />
                  <code>decorateNotification</code>
                  <code>decorateHeader</code>
                  <br />
                  <code>decorateTabs</code>
                  <br />
                  <code>decorateTab</code>
                  <code>decorateTerms</code>
                  <br />
                  <code>decorateTermGroup</code>
                  <br />
                  <code>decorateSplitPane</code>
                  <br />
                  <code>decorateTerm</code>
                  <br />
                </td>
                <td>Renderer</td>
                <td>
                  <p>
                    Invoked with the <code>React</code> <code>Component</code>
                    to decorate. Must return a Higher Order Component.
                  </p>
                  <p>Parameters:</p>
                  <table className="params">
                    <tbody>
                      <tr>
                        <td>
                          <code>Hyper</code>
                        </td>
                        <td>
                          The <code>React</code> <code>Component</code>
                          constructor.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <code>env</code>
                        </td>
                        <td>
                          A collection of useful module references for building
                          components.{' '}
                          <a href="#decorating-components">See below</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 id="hyperyellow">
          <a href="#hyperyellow">Example theme: Hyperyellow</a>
        </h3>
        <p>
          The following extension simply alters the config to add CSS and yellow
          colors! Here's the{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/vercel/hyperyellow/blob/29c4ac9748be74d7ad587b7077758ef26f6ce5c2/index.js#L1"
          >
            code
          </a>
          .
        </p>
        <p style={{ textAlign: 'center' }}>
          <video
            src="/hyperyellow.mp4"
            autoPlay
            muted
            playsInline
            loop
            width={446}
            height={332}
            alt="hyperyellow_example"
          />
        </p>
        <p>
          Themes are simply plugins! Only one hook, <code>decorateConfig</code>
          is needed:
        </p>
        <pre>
          <code>
            exports.decorateConfig = (config) =&gt; {'{'}
            {'\n'}
            {'  '}return Object.assign({'{'}
            {'}'}, config, {'{'}
            {'\n'}
            {'    '}borderColor: 'yellow',{'\n'}
            {'    '}cursorColor: 'yellow',{'\n'}
            {'    '}css: `{'\n'}
            {'      '}${'{'}config.css || ''{'}'}
            {'\n'}
            {'      '}.tabs_nav .tabs_list .tab_text {'{'}
            {'\n'}
            {'        '}color: yellow;{'\n'}
            {'      '}
            {'}'}
            {'\n'}
            {'      '}.tabs_nav .tabs_title {'{'}
            {'\n'}
            {'        '}color: yellow;{'\n'}
            {'      '}
            {'}'}
            {'\n'}
            {'    '}`{'\n'}
            {'  '}
            {'}'});{'\n'}
            {'}'}
          </code>
        </pre>
        <p>
          I grabbed the class names by inspecting the term with Devtools, which
          you can trigger from <code>View -&gt; Toggle Developer Tools</code>.
          When you do so, notice that some classes are automatically generated
          and followed by a random nonce (e.g.: <code>term_13hv8io</code>).
          Ignore those: they change with every new window!
        </p>
        <p>
          Notice the emphasis on playing nice with other extensions.
          Specifically, we create a new object, extend only the keys we are
          interested in, and we <b>compose</b> the CSS to preserve the user's
          setting and that of other authors':
        </p>
        <pre>
          <code>
            return Object.assign({'{'}
            {'}'}, config, {'{'}
            {'\n'}
            {'  '}css: `{'\n'}
            {'    '}${'{'}config.css || ''{'}'}
            {'\n'}
            {'    '}/* your css here */{'\n'}
            {'  '}`{'\n'}
            {'}'});
          </code>
        </pre>
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
