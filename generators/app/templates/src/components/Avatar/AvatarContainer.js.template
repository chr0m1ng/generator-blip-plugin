import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { uploadProfilePic } from 'api/TenantApi';
import { showToast } from 'api/CommonApi';
import { useContentLocalizer } from 'hooks/content-localizer';
import { AvatarComponent } from './AvatarComponent';
import { localization } from './localization';

const AvatarContainer = ({
    img,
    can_edit,
    change_pic_label,
    onUpdateImage
}) => {
    const [is_loading, setIsLoading] = useState(false);
    const content = useContentLocalizer(localization);

    const updateImage = async (image) => {
        try {
            setIsLoading(true);
            const photo_uri = await uploadProfilePic(image);
            onUpdateImage(photo_uri);
        } catch (e) {
            showToast({
                type: 'danger',
                message: content.photoUpdateError
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AvatarComponent
            updateImage={updateImage}
            img={img}
            can_edit={can_edit}
            is_loading={is_loading}
            change_pic_label={change_pic_label}
        />
    );
};

AvatarContainer.propTypes = {
    img: PropTypes.string,
    can_edit: PropTypes.bool.isRequired,
    change_pic_label: PropTypes.string.isRequired,
    onUpdateImage: PropTypes.func.isRequired
};

export { AvatarContainer };
