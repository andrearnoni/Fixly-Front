import { useMemo } from 'react'
import {
    MaterialReactTable,
    useMaterialReactTable,
    MRT_GlobalFilterTextField,
    MRT_ToggleFiltersButton,
} from 'material-react-table';
import {
    Box,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    lighten,
} from '@mui/material';
import { AccountCircle, Send } from '@mui/icons-material';
import { data } from "../data/data"

const ServicesTable = () => {
    const columns = useMemo(() => [
        {
          id: 'profissional', //id used to define `group` column
          header: 'profissional',
          columns: [
            {
              accessorFn: (row) => `${row.name}`,
              id: 'name', //id is still required when using accessorFn instead of accessorKey
              header: 'Nome',
              size: 250,
              Cell: ({ renderedCellValue, row }) => (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <img
                    alt="avatar"
                    height={30}
                    src={row.original.avatar}
                    loading="lazy"
                    style={{ borderRadius: '50%' }}
                  />
                  <span>{renderedCellValue}</span>
                </Box>
              ),
            },
            {
              accessorKey: 'rate', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
              enableClickToCopy: true,
              filterVariant: 'autocomplete',
              header: 'Avaliação',
              size: 300,
            },
          ],
        },
        {
          id: 'id',
          header: 'Job Info',
          columns: [
            {
              accessorKey: 'salary',
              // filterVariant: 'range', //if not using filter modes feature, use this instead of filterFn
              filterFn: 'between',
              header: 'Salary',
              size: 200,
              //custom conditional format and styling
              Cell: ({ cell }) => (
                <Box
                  component="span"
                  sx={(theme) => ({
                    backgroundColor:
                      cell.getValue() < 50.000
                        ? theme.palette.error.dark
                        : cell.getValue() >= 50.000 &&
                            cell.getValue() < 75.000
                          ? theme.palette.warning.dark
                          : theme.palette.success.dark,
                    borderRadius: '0.25rem',
                    color: '#fff',
                    maxWidth: '9ch',
                    p: '0.25rem',
                  })}
                >
                  {cell.getValue()?.toLocaleString?.('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </Box>
              ),
            },
            {
              accessorKey: 'category', //hey a simple column for once
              header: 'Categoria',
              size: 350,
            },
            {
              accessorFn: (row) => new Date(row.startDate), //convert to Date for sorting and filtering
              id: 'register',
              header: 'Tempo Cadastrado',
              filterVariant: 'date',
              filterFn: 'lessThan',
              sortingFn: 'datetime',
              Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
              Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
              muiFilterTextFieldProps: {
                sx: {
                  minWidth: '250px',
                },
              },
            },
          ],
        },
      ],
      []
    );
  
    const table = useMaterialReactTable({
      columns,
      data,
      enableColumnFilterModes: true,
      enableColumnOrdering: true,
      enableGrouping: true,
      enableColumnPinning: true,
      enableFacetedValues: true,
      enableRowActions: true,
      enableRowSelection: true,
      initialState: {
        showColumnFilters: true,
        showGlobalFilter: true,
        columnPinning: {
          left: ['mrt-row-expand', 'mrt-row-select'],
          right: ['mrt-row-actions'],
        },
      },
      paginationDisplayMode: 'pages',
      positionToolbarAlertBanner: 'bottom',
      muiSearchTextFieldProps: {
        size: 'small',
        variant: 'outlined',
      },
      muiPaginationProps: {
        color: 'secondary',
        rowsPerPageOptions: [10, 20, 30],
        shape: 'rounded',
        variant: 'outlined',
      },
      renderDetailPanel: ({ row }) => (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-around',
            left: '30px',
            maxWidth: '1000px',
            position: 'sticky',
            width: '100%',
          }}
        >
          <img
            alt="avatar"
            height={200}
            src={row.original.avatar}
            loading="lazy"
            style={{ borderRadius: '50%' }}
          />
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4">Signature Catch Phrase:</Typography>
            <Typography variant="h1">
              &quot;{row.original.signatureCatchPhrase}&quot;
            </Typography>
          </Box>
        </Box>
      ),
      renderRowActionMenuItems: ({ closeMenu }) => [
        <MenuItem
          key={0}
          onClick={() => {
            // View profile logic...
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          View Profile
        </MenuItem>,
        <MenuItem
          key={1}
          onClick={() => {
            // Send email logic...
            closeMenu();
          }}
          sx={{ m: 0 }}
        >
          <ListItemIcon>
            <Send />
          </ListItemIcon>
          Send Email
        </MenuItem>,
      ],
      renderTopToolbar: ({ table }) => {
        const handleDeactivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('deactivating ' + row.getValue('name'));
          });
        };
  
        const handleActivate = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('activating ' + row.getValue('name'));
          });
        };
  
        const handleContact = () => {
          table.getSelectedRowModel().flatRows.map((row) => {
            alert('contact ' + row.getValue('name'));
          });
        };
  
        return (
          <Box
            sx={(theme) => ({
              backgroundColor: lighten(theme.palette.background.default, 0.05),
              display: 'flex',
              gap: '0.5rem',
              p: '8px',
              justifyContent: 'space-between',
            })}
          >
            <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {/* import MRT sub-components */}
              <MRT_GlobalFilterTextField table={table} />
              <MRT_ToggleFiltersButton table={table} />
            </Box>
            <Box>
              <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                <Button
                  color="error"
                  disabled={!table.getIsSomeRowsSelected()}
                  onClick={handleDeactivate}
                  variant="contained"
                >
                  Deactivate
                </Button>
                <Button
                  color="success"
                  disabled={!table.getIsSomeRowsSelected()}
                  onClick={handleActivate}
                  variant="contained"
                >
                  Activate
                </Button>
                <Button
                  color="info"
                  disabled={!table.getIsSomeRowsSelected()}
                  onClick={handleContact}
                  variant="contained"
                >
                  Contact
                </Button>
              </Box>
            </Box>
          </Box>
        );
      },
    });
  
    return (<MaterialReactTable table={table} />);
  };

export default ServicesTable