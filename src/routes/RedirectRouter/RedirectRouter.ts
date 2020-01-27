import { RoutesList } from '../../routes';
import { createBrowserHistory, History } from 'history';

class RedirectRouter {
    public history: History;
    constructor() {
        this.history = createBrowserHistory();
    }
    public goToSplash = () => {
        this.history.push(RoutesList.splash);
    };
    public goToLogin() {
        this.history.push(RoutesList.login);
    }
    public goToMain() {
        this.history.push(RoutesList.main);
    }
    public goToPage404() {
        this.history.push(RoutesList.page404);
    }
    public goToDashboard() {
        this.history.push(RoutesList.dashboard);
    }
    public gotToSomeRouteWithParams({
        campaignId,
        assessmentId
    }: {
        campaignId: number;
        assessmentId: number;
    }) {
        this.history.push(
            `/main/campaign/${campaignId}/assessment/${assessmentId}`
        );
    }
    public getCurrentPath = () => {
        return this.history.location.pathname;
    };
}

export default new RedirectRouter();
