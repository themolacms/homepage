import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gettingStartedContent =
`Install the CLI:
\`\`\`sh
npm install -g @molacms/cli
\`\`\`

Create a new project:
\`\`\`sh
mola new blank myApp
\`\`\`

See [@molacms/cli](https://github.com/themolacms/cli) for detail usage.`;

  constructor() { }

  ngOnInit(): void {
  }

}
