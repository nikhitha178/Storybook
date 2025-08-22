import type { Meta, StoryObj } from '@storybook/react';
import { RightArrow } from "./RightArrow";

import Github from "./assets/github.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Tutorials from "./assets/tutorials.svg";
import Styling from "./assets/styling.png";
import Context from "./assets/context.png";
import Assets from "./assets/assets.png";
import Docs from "./assets/docs.png";
import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

const meta: Meta = {
  title: "Configure/Configure your project",
  component: () => null, // no direct component, we’re rendering inline
};

export default meta;
type Story = StoryObj;

export const Configure: Story = {
  render: () => (
    <div>
      {/* Section 1 */}
      <div className="sb-container">
        <div className="sb-section-title">
          <h2>Configure your project</h2>
          <p>
            Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup.
            Below, explore guides for configuring Storybook with popular frameworks and tools.
            If you get stuck, learn how you can ask for help from our community.
          </p>
        </div>

        <div className="sb-section">
          <div className="sb-section-item">
            <img
              src={Styling}
              alt="A wall of logos representing different styling technologies"
            />
            <h4 className="sb-section-item-heading">Add styling and CSS</h4>
            <p className="sb-section-item-paragraph">
              Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.
            </p>
            <a
              href="https://storybook.js.org/docs/configure/styling-and-css/?renderer=react&ref=configure"
              target="_blank"
            >
              Learn more<RightArrow />
            </a>
          </div>

          <div className="sb-section-item">
            <img
              src={Context}
              alt="An abstraction representing the composition of data for a component"
            />
            <h4 className="sb-section-item-heading">Provide context and mocking</h4>
            <p className="sb-section-item-paragraph">
              Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.
            </p>
            <a
              href="https://storybook.js.org/docs/writing-stories/decorators/?renderer=react&ref=configure#context-for-mocking"
              target="_blank"
            >
              Learn more<RightArrow />
            </a>
          </div>

          <div className="sb-section-item">
            <img src={Assets} alt="A representation of typography and image assets" />
            <div>
              <h4 className="sb-section-item-heading">Load assets and resources</h4>
              <p className="sb-section-item-paragraph">
                To link static files (like fonts) to your projects and stories, use the
                <code> staticDirs</code> configuration option to specify folders to load when starting Storybook.
              </p>
              <a
                href="https://storybook.js.org/docs/configure/images-and-assets/?renderer=react&ref=configure"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="sb-container">
        <div className='sb-section-title'>
          <h2>Do more with Storybook</h2>
          <p>
            Now that you know the basics, let's explore other parts of Storybook that will improve your experience.
            This list is just to get you started. You can customise Storybook in many ways to fit your needs.
          </p>
        </div>

        <div className="sb-section">
          <div className="sb-features-grid">
            <div className="sb-grid-item">
              <img src={Docs} alt="Docs example" />
              <h4 className="sb-section-item-heading">Autodocs</h4>
              <p className="sb-section-item-paragraph">
                Auto-generate living, interactive reference documentation from your components and stories.
              </p>
              <a
                href="https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react&ref=configure"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>

            <div className="sb-grid-item">
              <img src={Share} alt="Storybook publish example" />
              <h4 className="sb-section-item-heading">Publish to Chromatic</h4>
              <p className="sb-section-item-paragraph">
                Publish your Storybook to review and collaborate with your entire team.
              </p>
              <a
                href="https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react&ref=configure#publish-storybook-with-chromatic"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>

            <div className="sb-grid-item">
              <img src={FigmaPlugin} alt="Figma plugin example" />
              <h4 className="sb-section-item-heading">Figma Plugin</h4>
              <p className="sb-section-item-paragraph">
                Embed your stories into Figma to cross-reference the design and live implementation in one place.
              </p>
              <a
                href="https://storybook.js.org/docs/sharing/design-integrations/?renderer=react&ref=configure#embed-storybook-in-figma-with-the-plugin"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>

            <div className="sb-grid-item">
              <img src={Testing} alt="Testing example" />
              <h4 className="sb-section-item-heading">Testing</h4>
              <p className="sb-section-item-paragraph">
                Use stories to test a component in all its variations, no matter how complex.
              </p>
              <a
                href="https://storybook.js.org/docs/writing-tests/?renderer=react&ref=configure"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>

            <div className="sb-grid-item">
              <img src={Accessibility} alt="Accessibility example" />
              <h4 className="sb-section-item-heading">Accessibility</h4>
              <p className="sb-section-item-paragraph">
                Automatically test your components for a11y issues as you develop.
              </p>
              <a
                href="https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react&ref=configure"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>

            <div className="sb-grid-item">
              <img src={Theming} alt="Theming example" />
              <h4 className="sb-section-item-heading">Theming</h4>
              <p className="sb-section-item-paragraph">
                Theme Storybook's UI to personalize it to your project.
              </p>
              <a
                href="https://storybook.js.org/docs/configure/theming/?renderer=react&ref=configure"
                target="_blank"
              >
                Learn more<RightArrow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className='sb-addon'>
        <div className='sb-addon-text'>
          <h4>Addons</h4>
          <p className="sb-section-item-paragraph">
            Integrate your tools with Storybook to connect workflows.
          </p>
          <a href="https://storybook.js.org/addons/?ref=configure" target="_blank">
            Discover all addons<RightArrow />
          </a>
        </div>
        <div className='sb-addon-img'>
          <img src={AddonLibrary} alt="Addon library" />
        </div>
      </div>

      {/* Socials */}
      <div className="sb-section sb-socials">
        <div className="sb-section-item">
          <img src={Github} alt="Github logo" className="sb-explore-image" />
          Join our contributors building the future of UI development.
          <a href="https://github.com/storybookjs/storybook" target="_blank">
            Star on GitHub<RightArrow />
          </a>
        </div>

        <div className="sb-section-item">
          <img src={Discord} alt="Discord logo" className="sb-explore-image" />
          <div>
            Get support and chat with frontend developers.
            <a href="https://discord.gg/storybook" target="_blank">
              Join Discord server<RightArrow />
            </a>
          </div>
        </div>

        <div className="sb-section-item">
          <img src={Youtube} alt="Youtube logo" className="sb-explore-image" />
          <div>
            Watch tutorials, feature previews and interviews.
            <a href="https://www.youtube.com/@chromaticui" target="_blank">
              Watch on YouTube<RightArrow />
            </a>
          </div>
        </div>

        <div className="sb-section-item">
          <img src={Tutorials} alt="Tutorials" className="sb-explore-image" />
          <p>Follow guided walkthroughs on key workflows.</p>
          <a href="https://storybook.js.org/tutorials/?ref=configure" target="_blank">
            Discover tutorials<RightArrow />
          </a>
        </div>
      </div>
      <style>
        {`
         /* General container */
.sb-container {
  margin: 2rem 0;
  padding: 1rem;
}

/* Section title */
.sb-section-title h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}
.sb-section-title p {
  font-size: 1rem;
  color: var(--text-muted, #555);
}

/* Section layout */
.sb-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

/* Grid items */
.sb-grid-item, .sb-section-item {
  background: var(--card-bg, #fff);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.sb-grid-item:hover, .sb-section-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

/* Images */
.sb-grid-image, .sb-explore-image, .sb-section-item img {
  width: 80px;
  height: auto;
  margin-bottom: 1rem;
  object-fit: contain;
}

/* Headings */
.sb-section-item-heading {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: var(--text-primary, #111);
}

/* Paragraphs */
.sb-section-item-paragraph {
  font-size: 0.95rem;
  color: var(--text-secondary, #444);
  margin-bottom: 0.5rem;
}

/* Links */
.sb-section-item a {
  font-weight: 500;
  color: var(--link-color, #0070f3);
  text-decoration: none;
}
.sb-section-item a:hover {
  text-decoration: underline;
}

/* Addon section */
.sb-addon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}
.sb-addon-text {
  flex: 1;
  min-width: 250px;
}
.sb-addon-img img {
  max-width: 250px;
  border-radius: 12px;
}

/* Socials */
.sb-socials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

/* ========================= */
/* THEME SUPPORT             */
/* ========================= */
:root[data-theme='light'] {
  --card-bg: #fff;
  --text-primary: #111;
  --text-secondary: #444;
  --text-muted: #555;
  --link-color: #0070f3;
}

:root[data-theme='dark'] {
  --card-bg: #1e1e1e;
  --text-primary: #f5f5f5;
  --text-secondary: #ccc;
  --text-muted: #aaa;
  --link-color: #4dabf7;
}

        `}
      </style>
    </div>
  ),
};
