import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
const Drugs = () => {

    const drugs = [{
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    },
    {
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    },
    {
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    },
    {
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    },
    {
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    },
    {
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    },
    {
        id: '1',
        name: 'Aspirin',
        description: '- İltihabi durumlarda: örn. akut ve kronik romatizmal hastalıklarda- Ağrılarda; örn. baş ve diş ağrısı, bel ağrısı (lumbago), nevralji, siyatik, migren- Soğuk algınlığı, grip ve hafif enfeksiyonlarda görülen ağrı ve ateşdurumlarında',

    }];
    return (
        <List
            itemLayout="horizontal"
            dataSource={drugs}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={item.name}
                        description={item.description} />
                </List.Item>
            )}>
        </List>
    )
};

export default Drugs;