import { useState } from "react";
import "./styles.css";
import wordsDataOne from "./data/wordsDataOne";
import wordsDataTwo from "./data/wordsDataTwo";
import Header from "./components/Header";
import Word from "./components/Word";
import NavButtons from "./components/NavButtons";
import Footer from "./components/Footer";

export default function App() {
  const [wordsDataArray, setWordsDataArray] = useState(wordsDataOne);
  const [currentWord, setCurrentWord] = useState(wordsDataArray[0]);

  /* Challenge 

    Aşağıdaki iki <NavButtons /> ve bir <Word /> elementinde çok fazla prop var. Sizin göreviniz kodun bu kısmını aşağıdaki gibi daha kısa ve etkili hale getirmektir: 
        
        1. Üç öğenin (iki <NavButtons /> ve bir <Word /> öğesi) her birinde yalnızca bir prop olmalıdır. Her prop, o anda elemana aktarılmakta olan tüm verileri korumalıdır. 
                        
        2. Components klasöründeki NavButtons ve Word bileşenlerinin kodu, propların öğelere nasıl aktarıldığındaki değişikliklere uyum sağlayacak şekilde değiştirilmelidir. Yapmanız gereken değişiklikler *çok* küçük değişiklikler.   
	
        3. Bu görevleri minimum miktarda çalışmayla gerçekleştirmelisiniz. Bu görevi tamamlamak için yapmanız gereken fazla bir şey yok. Kendinizi çok sıkıcı, tekrarlayan işler yaparken bulursanız, bu görevlerden birini verimsiz bir şekilde yaptığınızın işaretidir  
		   
	Not: Sonuçların, prop'ları geçmenin "en iyi" yolu olması gerekmez. Bu sadece geçirdiğiniz prop sayısını azaltmaya yönelik bir alıştırma olarak düşünülmüştür
*/
  const navProps1 = {
    wordsDataArray,
    currentWord,
    setCurrentWord,
    position: "top",
  };
  const wordProps = { ...currentWord, wordsDataArray };
  const navProps2 = { ...navProps1, position: "bottom" };
  return (
    <div className="wrapper">
      <Header />

      <NavButtons {...navProps1} />

      <Word {...wordProps} />

      <NavButtons {...navProps2} />

      <Footer />
    </div>
  );
}
