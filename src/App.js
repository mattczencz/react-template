import './App.css';
import {VerticleFlexBox, HorizontalFlexBox} from "./Styles/Containers"

function App() {
  return (
    <>
      <VerticleFlexBox>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
      </VerticleFlexBox>
      <VerticleFlexBox alignLeft>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
      </VerticleFlexBox>
      <VerticleFlexBox alignRight>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
      </VerticleFlexBox>
      <HorizontalFlexBox alignRight>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
      </HorizontalFlexBox>
      <HorizontalFlexBox alignLeft>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
        <div style={{height: '20px'}}>I am div</div>
      </HorizontalFlexBox>
    </>
  );
}

export default App;
