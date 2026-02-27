import './App.css'
import AwardsSection from './components/awards'
import CorporateCTA from './components/cta_2'
import CTASection from './components/cta_section'
import FeaturesSection from './components/features'
import Footer from './components/footer'
import YouHealthLanding from './components/landing'
import ProviderEcosystem from './components/provider_eco'
import Roadmap from './components/roadmap'
import SolutionsSection from './components/solutions'
import TeamSection from './components/team_members'

function App() {

  return (
    <>
    <YouHealthLanding/>
    <FeaturesSection/>
    <SolutionsSection/>
    <CTASection/>
    <ProviderEcosystem/>
    <AwardsSection/>
    <Roadmap/>
    <TeamSection/>
    <CorporateCTA/>
    <Footer/>
    </>
  )
}

export default App
