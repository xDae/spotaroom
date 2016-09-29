import { configure } from '@kadira/storybook';
import '../public/main.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
