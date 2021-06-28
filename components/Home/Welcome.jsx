import WelcomePage from "./Welcome/WelcomePage"
import WelcomeCTA from "./Welcome/WelcomeCTA"
import WelcomeDevelopers from "./Welcome/WelcomeDevelopers"
import WelcomeCategories from "./Welcome/WelcomeCategory/WelcomeCategories"

const Welcome = () => {
    return (
        <div>
            <WelcomePage/>
            <WelcomeCTA/>
            <WelcomeCategories/>
            <WelcomeDevelopers/>
        </div>
    )
}

export default Welcome
