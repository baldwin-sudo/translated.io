import React, { useEffect, useRef, useState, useMemo } from "react";
import TranslateInputForm from "./TranslateInputForm";
import TranslateResultForm from "./TranslateResultForm";
export default function TranslateApp() {
  const [inputForm, setInputForm] = useState({
    language: "en",
    text: "Hello , how are you ?",
  });
  const [resultForm, setResultForm] = useState({
    language: "fr",
    text: "Bonjour , comment allez vous ?",
  });
  //handle the onChange textArea
  const isExchangeable = useMemo(
    () => inputForm.language !== "",
    [inputForm.language]
  );
  const handleExchange = () => {
    setInputForm({ language: resultForm.language, text: resultForm.text });
    setResultForm({ language: "", text: "" });
  };
  const handleOnChangeInputTextArea = (e) => {
    e.preventDefault();
    setInputForm({ ...inputForm, text: e.target.value });
  };
  // handle translate button
  const handleTranslateButton = async () => {
    try {
      const query = inputForm.text;
      const sourceLang = inputForm.language;
      console.log(sourceLang);
      const targetLang = resultForm.language;
      setResultForm({ ...resultForm, text: "translating ..." });

      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${query}&langpair=${sourceLang}|${targetLang}`
      );
      const data = await res.json();
      console.log(data.responseData);
      setResultForm({ ...resultForm, text: data.responseData.translatedText });
    } catch (e) {
      console.log(e);
    } finally {
      console.log("finanly");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row px-5 lg:p-10 xl:p-0  gap-5 items-center justify-center text-xs lg:text-lg">
      <TranslateInputForm
        textState={inputForm}
        setTextState={setInputForm}
        handleOnChangeTextArea={handleOnChangeInputTextArea}
        handleTranslateButton={handleTranslateButton}
      />
      <TranslateResultForm
        textState={resultForm}
        setTextState={setResultForm}
        handleExchange={handleExchange}
        isExchangeable={isExchangeable}
      />
    </div>
  );
}
