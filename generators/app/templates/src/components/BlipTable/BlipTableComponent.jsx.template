import React from 'react';
import PropTypes from 'prop-types';
import { BlipCheckBox } from 'components/BlipCheckBox';

const Sorter = ({ property, current_sort, setSort }) => {
    return (
        <div
            className="ordinator flex flex-column justify-center mr2 pointer"
            onClick={() =>
                setSort({
                    property,
                    order:
                        current_sort.property === property &&
                        current_sort.order === 'asc'
                            ? 'desc'
                            : 'asc'
                })
            }
        >
            <span
                className={`arrow asc mb1 ${
                    current_sort.property === property &&
                    current_sort.order === 'asc'
                        ? 'active'
                        : ''
                }`}
            ></span>
            <span
                className={`arrow desc ${
                    current_sort.property === property &&
                    current_sort.order === 'desc'
                        ? 'active'
                        : ''
                }`}
            ></span>
        </div>
    );
};

Sorter.propTypes = {
    property: PropTypes.string.isRequired,
    current_sort: PropTypes.object,
    setSort: PropTypes.func.isRequired
};

const BlipTableComponent = ({
    model,
    data,
    selected_items,
    id_key,
    toggleSelect,
    toggleSelectAll,
    can_select,
    current_sort,
    setSort,
    content,
    actions,
    empty_message,
    isAllSelected,
    body_height
}) => {
    return (
        <table className="bp-table w-100 tl bp-table--scroll-y ">
            <thead className="bp-c-desk">
                <tr className="w-100">
                    {can_select && data.length > 0 && (
                        <th className="w3">
                            <BlipCheckBox
                                toggleCheck={toggleSelectAll}
                                checked={isAllSelected()}
                            />
                        </th>
                    )}
                    {model.map((property) => (
                        <th key={property.key}>
                            <div className="flex items-center">
                                {!property.notSortable && (
                                    <Sorter
                                        property={property.key}
                                        current_sort={current_sort}
                                        setSort={setSort}
                                    />
                                )}
                                <p>{property.label}</p>
                            </div>
                        </th>
                    ))}
                    {can_select && (
                        <th className="w5">
                            <div
                                className={`selectedItems flex justify-around items-center ${
                                    selected_items.length > 0 ? '' : 'hidden'
                                }`}
                            >
                                <p className="nowrap">
                                    {selected_items.length} {content.selected}
                                </p>
                                {actions}
                            </div>
                        </th>
                    )}
                </tr>
            </thead>
            <tbody
                style={{
                    maxHeight: body_height
                }}
            >
                {data.length > 0 ? (
                    data.map((item) => {
                        const is_selected = selected_items.some(
                            (selected_item) =>
                                item[id_key] === selected_item[id_key]
                        );
                        return (
                            <tr
                                key={item[id_key]}
                                className={`${is_selected ? 'selected' : ''}`}
                            >
                                {can_select && (
                                    <td className="w3">
                                        <BlipCheckBox
                                            toggleCheck={() =>
                                                toggleSelect(item)
                                            }
                                            checked={is_selected}
                                        />
                                    </td>
                                )}

                                {model.map((property) => (
                                    <td
                                        key={property.key + item[id_key]}
                                        title={item[property.key]}
                                    >
                                        {item[property.key]}
                                    </td>
                                ))}

                                {can_select && (
                                    <td className="w5">{item['actions']}</td>
                                )}
                            </tr>
                        );
                    })
                ) : (
                    <tr className="w-100 bp-bg-offwhite tc">
                        <td
                            className="bp-bg-offwhite"
                            colSpan={model.length + 1}
                        >
                            <p className="empty-message pa5">{empty_message}</p>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

BlipTableComponent.propTypes = {
    model: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    selected_items: PropTypes.array.isRequired,
    id_key: PropTypes.string.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleSelectAll: PropTypes.func.isRequired,
    can_select: PropTypes.bool,
    current_sort: PropTypes.object,
    setSort: PropTypes.func.isRequired,
    content: PropTypes.object.isRequired,
    actions: PropTypes.arrayOf(PropTypes.node),
    empty_message: PropTypes.string.isRequired,
    isAllSelected: PropTypes.func.isRequired,
    body_height: PropTypes.string.isRequired
};

export { BlipTableComponent };
