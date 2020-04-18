import "../../css/style_b.scss";

import { toggle } from "../base/selectors";
import { toggleClicked } from "../base/menu_links";

toggle.addEventListener("click", toggleClicked);
