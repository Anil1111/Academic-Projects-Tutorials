
//Work with the below comment as all files have individual requirements mentioned, or else we can avoid that and consolidate all imports at app.ts

/* /// <reference path="./models/drag-drop.ts" />
/// <reference path="./models/project.ts" />
/// <reference path="./state/project-state.ts" />
/// <reference path="./util/validation.ts" />
/// <reference path="./decorators/autobind.ts" />
/// <reference path="./components/base-components.ts" />
/// <reference path="./components/project-item.ts" />
 */

/// <reference path="./components/project-input.ts" />
/// <reference path="./components/project-list.ts" />

namespace App {

  new ProjectInput();
  new ProjectList("active"); //can use the enum type also
  new ProjectList("finished");

} 
