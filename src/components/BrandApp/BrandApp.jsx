import { BrandContainer } from "../../containers/BrandContainer/BrandContainer";
import { Head } from "../Head/Head";
import { Content } from "../Content/Content";

export const BrandApp = ({clothes, dispatch, pusto}) => {
  console.log('BrandApp')
  return (
    <BrandContainer>
      <Head />
      <Content clothes = {clothes} dispatch={dispatch} pusto={pusto}/>
    </BrandContainer>
  );
};