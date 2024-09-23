import { bootstrapApplication } from '@angular/platform-browser';
import { AppRootComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppRootComponent, config);

export default bootstrap;
