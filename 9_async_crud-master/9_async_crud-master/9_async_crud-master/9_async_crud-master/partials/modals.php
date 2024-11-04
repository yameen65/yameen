<!-- Add Country Modal -->
<div class="modal fade" id="addCountryModal" tabindex="-1" aria-labelledby="addCountryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="addCountryModalLabel">Add Country</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="add-alert"></div>
                <form id="add-form">
                    <div class="mb-3">
                        <label for="name-add" class="form-label">Name</label>
                        <input type="text" id="name-add" class="form-control" placeholder="Name!">
                    </div>

                    <div class="mb-3">
                        <label for="capital-add" class="form-label">Capital</label>
                        <input type="text" id="capital-add" class="form-control" placeholder="capital!">
                    </div>

                    <div class="mb-3">
                        <label for="continent-add" class="form-label">Continent</label>
                        <input type="text" id="continent-add" class="form-control" placeholder="continent!">
                    </div>

                    <div class="mb-3">
                        <label for="language-add" class="form-label">Language</label>
                        <input type="text" id="language-add" class="form-control" placeholder="language!">
                    </div>

                    <div class="mb-3">
                        <label for="currency-add" class="form-label">currency</label>
                        <input type="text" id="currency-add" class="form-control" placeholder="currency!">
                    </div>

                    <div>
                        <input type="submit" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Edit Country Modal -->
<div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editcountryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="editCountryModalLabel">Edit Country</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="edit-alert"></div>
                <form id="edit-form">
                    <div class="mb-3">
                        <label for="name-edit" class="form-label">Name</label>
                        <input type="text" id="name-edit" class="form-control" placeholder="Name!">
                    </div>

                    <div class="mb-3">
                        <label for="capital-edit" class="form-label">Capital</label>
                        <input type="capital" id="capital-edit" class="form-control" placeholder="capital!">
                    </div>
                    <div class="mb-3">
                        <label for="language-edit" class="form-label">Language</label>
                        <input type="capital" id="language-edit" class="form-control" placeholder="language!">
                    </div>
                    <div class="mb-3">
                        <label for="currency-edit" class="form-label">Currency</label>
                        <input type="currency" id="currency-edit" class="form-control" placeholder="currency!">
                    </div>
                    <div class="mb-3">
                        <label for="continent-edit" class="form-label">Continent</label>
                        <input type="currency" id="currency-edit" class="form-control" placeholder="continent!">
                    </div>

                    <div>
                        <input type="submit" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Delete country Modal -->
<div class="modal fade" id="deleteCountryModal" tabindex="-1" aria-labelledby="deleteCountryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="deleteCountryModalLabel">Delete Country</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="delete-form">
                    Are you sure, you want to delete this?
                    <div class="mt-3">
                        <input type="submit" value="Yes" class="btn btn-outline-danger">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>