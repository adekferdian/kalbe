const mainColor = '#04763C';
const secondColor = 'whitesmoke';

exports.customTable = function () {
    return {
        typography: {
            useNextVariants: true,
        },
        overrides: {
            MUIDataTable: {
                paper: {
                    boxShadow: 'none !important',
                    marginTop: 10,
                },
            },
            MuiToolbar: {
                root: {
                    position: 'relative',
                }
            },
            MUIDataTableToolbar: {
                root: {
                    position: 'relative',
                    padding: "0px 5px",
                    backgroundColor: 'white',
                },
                titleText: {
                    color: "#555"
                },
                icon: {
                    color: "#555 !important"
                },
                iconActive: {
                    color: "#555 !important"
                },
                left: {
                    flex: "0 0 auto !important"
                },
                actions: {
                    flex: "1 0 auto !important"
                }
            },
            MuiTableCell: {
                root: {
                    display: 'table-cell',
                    padding: 8,
                    paddingLeft: 25,
                    paddingRight: 25,
                    fontSize: '0.875rem',
                    textAlign: 'left',
                    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.43,
                    borderBottom: '1px solid #fff',
                    letterSpacing: '0.01071em',
                    verticalAlign: 'inherit',
                }
            },
            MuiPopover: {
                paper: {
                    outline: 0,
                    position: 'absolute',
                    maxWidth: 'calc(100% -32px)',
                    minWidth: 199,
                    maxHeight: 'calc(100% -32px)',
                    minHeight: 16,
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    width: 400,
                }
            },
            MUIDataTableHead: {
                main: {
                    position: 'relative',
                    backgroundColor: mainColor,
                    color: "white",
                    fontSize: 12,
                },
                fixedHeader: {
                    color: "#2a9c6c",
                    height: "auto"
                    ,
                    marginTop: "10px"
                },
            },
            MUIDataTableHeadRow: {
                root: {
                    position: 'relative',
                    backgroundColor: mainColor,
                }
            },
            MUIDataTableHeadCell: {
                root: {
                    fontSize: "10pt",
                    fontWeight: "500",
                    color: "#555",
                    backgroundColor: secondColor,
                },
                fixedHeader: {
                    color: "white",
                    backgroundColor: '#04763C',
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    fontSize: 12,
                    height: "auto"
                },
                toolButton: {
                    display: "flex",
                    height: "auto",
                    whiteSpace: 'nowrap'
                },
                data: {
                    display: "inline-block",
                    verticalAlign: "top",
                },
                sortActive: {
                    color: "#555"
                },
                sortAction: {
                    color: "#555",
                    display: "inline-block",
                    verticalAlign: "top",
                    MuiButtonBase: {
                        color: "#555",
                        root: {
                            color: "#555",
                        }
                    }
                }
            },
            MUIDataTableBodyCell: {
                root: {
                    position: 'relative',
                    fontSize: "13px",
                },
                cellStacked: {
                    "&:nth-child(odd)": {
                        background: "yellow"
                    },
                }
            },
            MUIDataTableBodyRow: {
                root: {
                    '&:nth-child(1)': {
                        backgroundColor: '#e7ffec'
                    },
                    '&:nth-child(6)': {
                        backgroundColor: '#e7ffec'
                    },
                    '&:nth-child(9)': {
                        backgroundColor: '#e7ffec'
                    },
                }
            },
            MUIDataTableSelectCell: {
                headerCell: {
                    backgroundColor: secondColor,
                    checkboxRoot: {
                        color: "#555",
                    }
                },
                checkboxRoot: {
                    color: "#555"
                }
            },
            MuiInput: {
                root: {
                    top: "5px",
                    color: "#555 !important",
                },
                underline: {
                    borderBottom: "1px #555 solid !important",
                }
            },
            MuiSelect: {
                root: {
                    top: "0",
                    color: "#555 !important",
                },
            }
        }
    }
}

exports.customOptions = function () {
    return {
        filterType: 'multiselect',
        pagination: false,
        fixedHeader: true,
        filter: false,
        download: false,
        search: false,
        sort: false,
        print: false,
        selectableRows: false,
        viewColumns: false,
        responsive: 'scrollMaxHeight',
        textLabels: {
            body: {
              noMatch: "Tidak ada data yang tersedia",
              toolTip: "Sort",
              columnHeaderTooltip: column => `Sort for ${column.label}`
            },
            toolbar: {
                search: "Search",
                downloadCsv: "Download CSV",
                print: "Print",
                viewColumns: "View Columns",
                filterTable: "Filter Table",
            },
            filter: {
                all: "All",
                title: "FILTERS",
                reset: "RESET",
            },
            viewColumns: {
                title: "Show Columns",
                titleAria: "Show/Hide Table Columns",
            },
            selectedRows: {
                text: "row(s) selected",
                delete: "Delete",
                deleteAria: "Delete Selected Rows",
            },
        }
    }
}