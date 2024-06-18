import { Router } from "express";

import indexRoute from "./index.routes";
import appRoute from "./app.routes";
import mandtRoute from "./mandt.routes";
import userRoute from "./user.routes";
import policyRoute from "./policy.routes";
import roleRoute from "./role.routes";
import rightRoute from "./right.routes";

const apiRouter = Router();

apiRouter.use("/", indexRoute);
apiRouter.use("/app", appRoute);
apiRouter.use("/mandt", mandtRoute);
apiRouter.use("/user", userRoute);
apiRouter.use('/policy', policyRoute)
apiRouter.use('/role', roleRoute)
apiRouter.use('/right', rightRoute)

export default apiRouter;
