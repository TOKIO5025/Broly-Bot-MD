import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");

          conn.reply(m.chat, `*estoy activo * causa ${latensi.toFixed(4)} ms`, m, rcanal);
            });
}
handler.help = ['pong']
handler.tags = ['info']
handler.command = ['pong']
handler.register = true

export default handler