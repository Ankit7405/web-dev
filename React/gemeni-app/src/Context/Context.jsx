import { createContext } from "react";
import run from "../config/gemini";
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);

        let response;
        if(prompt !== undefined){
            response = await run(prompt);
            setRecentPrompt(prompt);
        }else{
            setRecentPrompt(input);
            setPrevPrompt(prev => [...prev, input]);
            response =  await run(input);
        }
        const delayPara = (index, nextWord) => {
            setTimeout(function() {
                setResultData((prev) => prev + nextWord);
            }, 75 * index);
        };

        
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i = 0; i < responseArray.length; i++){
            if(i == 0 || i % 2 !== 1 ){
                newResponse = newResponse + responseArray[i];
            }else{
                newResponse = newResponse + "<b>" + responseArray[i] + "</b>";  
            }
        }
        let finalResponse = newResponse.split("*").join("</br>");
        let newResponseArray = finalResponse.split(" ");
        for(let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
        setInput("");
    }

    // This funcation call is just for testing of promt result
    // onSent("What is React JS ");

    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        onSent,
        newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;