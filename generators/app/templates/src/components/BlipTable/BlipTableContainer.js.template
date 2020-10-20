import React, { useState, useCallback } from 'react';
import { BlipTableComponent } from './BlipTableComponent';
import PropTypes from 'prop-types';
import { useContentLocalizer } from 'hooks/content-localizer';
import { localization } from './localization';

const BlipTableContainer = ({
    model,
    data,
    id_key = 'id',
    onItemSelect,
    onSortSet,
    can_select = false,
    actions,
    empty_message,
    selected_items,
    body_height = '200px'
}) => {
    const [current_sort, setCurrentSort] = useState({
        property: '',
        order: ''
    });

    const content = useContentLocalizer(localization);

    const toggleSelect = (item) => {
        let temp_selected_items = [...selected_items];
        if (
            selected_items.some(
                (selected_item) => item[id_key] === selected_item[id_key]
            )
        ) {
            temp_selected_items = temp_selected_items.filter(
                (selected_item) => item[id_key] !== selected_item[id_key]
            );
        } else {
            temp_selected_items.push(item);
        }
        onItemSelect !== undefined && onItemSelect(temp_selected_items);
    };

    const isAllSelected = useCallback(() => {
        if (selected_items.length === 0) {
            return false;
        }
        let it_is = true;
        data.forEach((item) => {
            if (
                !selected_items.some(
                    (selected_item) => item[id_key] === selected_item[id_key]
                )
            ) {
                it_is = false;
            }
        });
        return it_is;
    }, [selected_items, data, id_key]);

    const toggleSelectAll = () => {
        let temp_selected_items;
        if (isAllSelected()) {
            temp_selected_items = [];
        } else {
            temp_selected_items = [...data];
        }
        onItemSelect !== undefined && onItemSelect(temp_selected_items);
    };

    const setSort = (sort) => {
        onSortSet !== undefined && onSortSet(sort);
        setCurrentSort(sort);
    };

    return (
        <BlipTableComponent
            model={model}
            data={data}
            id_key={id_key}
            selected_items={selected_items}
            toggleSelect={toggleSelect}
            toggleSelectAll={toggleSelectAll}
            can_select={can_select}
            current_sort={current_sort}
            setSort={setSort}
            content={content}
            actions={actions}
            empty_message={empty_message || content.emptyMessage}
            isAllSelected={isAllSelected}
            body_height={body_height}
        />
    );
};

BlipTableContainer.propTypes = {
    model: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    id_key: PropTypes.string,
    onItemSelect: PropTypes.func,
    onSortSet: PropTypes.func,
    can_select: PropTypes.bool,
    actions: PropTypes.arrayOf(PropTypes.node),
    empty_message: PropTypes.string,
    selected_items: PropTypes.arrayOf(Object).isRequired,
    body_height: PropTypes.string
};

export { BlipTableContainer };
