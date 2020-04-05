import fs from 'fs';
import { AdapterBase } from './base.adapter';

export class FileAdapter extends AdapterBase {
    protected load() {
        if (fs.existsSync('hive-stream.json')) {
            const state = JSON.parse((fs.readFileSync('hive-stream.json') as unknown) as string);

            return state;
        }
    }

    protected async save(data: any) {
        fs.writeFile('hive-stream.json', JSON.stringify(data), err => {
            if (err) {
                console.error(err);

                return err;
            }

            return true;
        });
    }
}