import init, { commp_from_bytes, padded_piece_size } from "./pkg/wasm_commp.js";

async function run() {
    await init();

    document.getElementById("fileInput").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function () {
            const content = reader.result;
            let piece_size = padded_piece_size(content);
            console.log(`Padded Piece Size from JS: ${piece_size}`);
            let cid = commp_from_bytes(content);
            console.log(`CID from JS: ${cid}`);
        };
        reader.readAsText(file);
    });
}

run();
