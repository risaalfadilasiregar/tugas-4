import ReactDOM from "react-dom/client";


function Tombol(props){
    function handleClick(){
        alert(`Anda Mengklik Tombol ${props.teks}.`);
    }
    return <button onClick={handleClick}>{props.teks}</button>
}

function App(){
    return(
        <>
            <div>
                <Tombol teks="Selama Datang" />
                <Tombol teks="Terimakasih Telah Mengunjungi" />    
            </div>
            <div>
            <Tombol teks="Silahkan Datng Kembali" />
            <Tombol teks="Sampai Jumpa!!" />
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);