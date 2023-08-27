import React from 'react'
import { useTranslation } from 'react-i18next';
// Testing
import { getProductImage } from '../../../assets/products/imageIndex';
import { SingleCategory } from '../../ui/SingleCategory';
//---end

export const Categories = (props) => {
    const { small } = props;
    const { t, i18n } = useTranslation();
    // Testing products instead of cat
    const imageList = [];
    for (let i = 1; i <= 14; i++) {
        imageList.push(getProductImage(i))
    }
    // --end
    return (
        <>
            <div>
                <div>
                    <h3 className='mx-4 text-lg'>{t('categories-title')}</h3>
                    <div className='flex flex-row overflow-x-auto overflow-y-hidden gap-6 m-4 pb-2'>
                        {
                            imageList.map((currentImage, index) => {
                                return (
                                    <div key={index}>
                                        <SingleCategory
                                            smallMode={small}
                                            currentImage={currentImage}
                                            categoryTitle='Product title'
                                            categoryDescription='Product description'
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}